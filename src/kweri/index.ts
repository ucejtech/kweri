import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';
import type {
  Endpoint,
  InferParams,
  InferResponse
} from '../contract/index.js';
import type { Fetcher } from '../types/index.js';
import { ValidationError } from '../types/index.js';
import type { CacheEntry } from '../cache/cache-entry.js';
import { createCacheEntry, isFresh, categorizeError } from '../cache/index.js';
import { CacheStore } from '../cache/cache-store.js';
import { ObserverRegistry } from '../subscriptions/index.js';
import { QueryClient } from '../query-client/index.js';
import { ApiClient } from '../api-client/index.js';
import { FetchOrchestrator } from '../fetch-orchestrator/index.js';
import { EvictionEngine, type TimerAdapter } from '../eviction/index.js';
import type { MutationOptions } from '../mutations/index.js';
import type { KweriDevToolsSnapshot } from './devtools-types.js';
import {
  mountKweriDevTools,
  type MountKweriDevToolsOptions
} from '../devtools/index.js';
import { isProductionRuntime } from '../runtime-env.js';
import type { PersistenceAdapter } from '../persistence/index.js';
import { CACHE_VERSION } from '../persistence/index.js';
export type { KweriDevToolsSnapshot } from './devtools-types.js';

export interface KweriOptions {
  baseURL: string;
  fetcher?: Fetcher;
  gcInterval?: number;
  staleTime?: number;
  cacheTime?: number;
  /**
   * When true, mounts the floating query-cache devtools in the browser (no-op in SSR / non-DOM).
   * Forced off when the runtime reports production (`NODE_ENV`, `BUN_ENV`, `VERCEL_ENV`, or Vite `import.meta.env`).
   */
  enableDevTools?: boolean;
  /** Options passed to `mountKweriDevTools` when `enableDevTools` is true. */
  devtools?: MountKweriDevToolsOptions;
  /** Maximum number of automatic retries for retryable errors. Default 0 (no retry). Uses exponential backoff with jitter. */
  maxRetries?: number;
  /** Optional pluggable persistence adapter for saving/restoring cache across sessions. Silently skipped in SSR. All failures are non-fatal. */
  persistence?: PersistenceAdapter;
}

/**
 * Flattens nested params `{ path, query, body }` into the flat shape
 * that ApiClient.execute() / buildUrl() expects.
 */
function flattenParams(params: unknown): Record<string, any> {
  if (!params || typeof params !== 'object') return {};
  const p = params as Record<string, any>;
  const hasNested =
    (p.path && typeof p.path === 'object') ||
    (p.query && typeof p.query === 'object') ||
    p.body !== undefined;
  if (!hasNested) return { ...p };

  const flat: Record<string, any> = {};
  if (p.path && typeof p.path === 'object') Object.assign(flat, p.path);
  if (p.query && typeof p.query === 'object') Object.assign(flat, p.query);
  if (p.body !== undefined) flat.body = p.body;
  return flat;
}

/** Exponential backoff with jitter: min(1000 * 2^attempt, 30s) + random(0, 1s) */
function getRetryDelay(attempt: number): number {
  return Math.min(1000 * Math.pow(2, attempt), 30_000) + Math.random() * 1000
}

export class Kweri {
  readonly queryClient: QueryClient;
  readonly apiClient: ApiClient;

  private readonly store: CacheStore;
  private readonly observers: ObserverRegistry;
  private readonly orchestrator: FetchOrchestrator;
  private readonly eviction: EvictionEngine;
  private readonly defaultStaleTime: number;
  private readonly defaultCacheTime: number;
  private readonly maxRetries: number;
  private readonly timer: TimerAdapter;
  private readonly persistence: PersistenceAdapter | undefined;
  private devtoolsUnmount: (() => void) | undefined;

  constructor(options: KweriOptions, timer?: TimerAdapter) {
    const defaultFetcher: Fetcher = async (opts) => {
      return fetch(opts.url, {
        method: opts.method,
        headers: opts.body ? { 'Content-Type': 'application/json' } : {},
        body: opts.body ? JSON.stringify(opts.body) : undefined
      });
    };

    this.store = new CacheStore();
    this.observers = new ObserverRegistry();
    this.queryClient = new QueryClient(this.store, this.observers);
    this.apiClient = new ApiClient(
      options.baseURL,
      options.fetcher ?? defaultFetcher
    );
    this.orchestrator = new FetchOrchestrator();
    this.eviction = new EvictionEngine(
      this.store,
      this.observers.getObserverCount.bind(this.observers)
    );

    this.defaultStaleTime = options.staleTime ?? 0;
    this.defaultCacheTime = options.cacheTime ?? 5 * 60_000;
    this.maxRetries = options.maxRetries ?? 0;
    this.timer = timer ?? {
      setInterval: (fn, ms) => setInterval(fn, ms),
      clearInterval: (handle) => clearInterval(handle),
      setTimeout: (fn, ms) => setTimeout(fn, ms),
      clearTimeout: (handle) => clearTimeout(handle as any),
      now: () => Date.now(),
    };

    if (options.gcInterval) {
      this.eviction.start(options.gcInterval);
    }

    if (options.enableDevTools && !isProductionRuntime()) {
      this.devtoolsUnmount = mountKweriDevTools(this, options.devtools);
    }

    this.persistence = options.persistence;
    if (this.persistence) this.hydrate(this.persistence);
  }

  /**
   * Fetch + deduplicate + cache + notify. Returns cached data immediately
   * if fresh; otherwise fetches, caches the result, and notifies observers.
   */
  async query<E extends Endpoint>(
    endpoint: E,
    params: InferParams<E>
  ): Promise<InferResponse<E>> {
    const key = this.queryClient.getQueryKey(endpoint, params);

    const cached = this.store.get(key);
    if (cached && isFresh(cached)) {
      return cached.data as InferResponse<E>;
    }

    return this.orchestrator.fetch(key, async () => {
      let attempt = 0;

      while (true) {
        this.store.set(key, {
          status: 'loading',
          staleTime: this.defaultStaleTime,
          cacheTime: this.defaultCacheTime
        });
        this.observers.notify(key, this.store.get(key)!);

        try {
          const flat = flattenParams(params);
          const execEndpoint = { ...endpoint, params: Type.Any() };
          const response = await this.apiClient.execute(execEndpoint, flat);
          const data =
            typeof response?.json === 'function'
              ? await response.json()
              : response;

          if (!Value.Check(endpoint.response, data)) {
            const errors = Array.from(Value.Errors(endpoint.response, data))
              .map(err => ({ path: err.path, message: err.message }))
            throw new ValidationError(
              `Invalid response for ${endpoint.method} ${endpoint.path}`,
              errors
            )
          }

          const entry = createCacheEntry({
            data,
            status: 'success',
            staleTime: this.defaultStaleTime,
            cacheTime: this.defaultCacheTime
          });
          this.store.set(key, entry);
          this.observers.notify(key, this.store.get(key)!);
          this.persist();

          return data as InferResponse<E>;
        } catch (e) {
          const error = categorizeError(e);
          const retryCount = (this.store.get(key)?.retryCount ?? 0) + 1;

          if (error.retryable && attempt < this.maxRetries) {
            this.store.set(key, { status: 'error', error, errorUpdatedAt: Date.now(), retryCount });
            this.observers.notify(key, this.store.get(key)!);
            await new Promise<void>(resolve => this.timer.setTimeout(resolve, getRetryDelay(attempt)));
            attempt++;
            continue;
          }

          this.store.set(key, { status: 'error', error, errorUpdatedAt: Date.now(), retryCount });
          this.observers.notify(key, this.store.get(key)!);
          throw e;
        }
      }
    }) as Promise<InferResponse<E>>;
  }

  /**
   * Execute a mutation: onMutate -> execute -> onSuccess + invalidate, or
   * onError; always onSettled. Params are flattened for the API call.
   */
  async mutate<E extends Endpoint, TContext = unknown>(
    endpoint: E,
    params: InferParams<E>,
    options: MutationOptions<
      InferParams<E>,
      InferResponse<E>,
      TContext
    > = {} as any
  ): Promise<InferResponse<E>> {
    const { onMutate, onSuccess, onError, onSettled, invalidates } = options;

    const context = onMutate
      ? await Promise.resolve(onMutate(params))
      : (undefined as TContext);

    let data: InferResponse<E> | undefined;
    let error: Error | undefined;

    try {
      const flat = flattenParams(params);
      const execEndpoint = { ...endpoint, params: Type.Any() };
      const rawResponse = await this.apiClient.execute(execEndpoint, flat);
      data = (
        typeof rawResponse?.json === 'function'
          ? await rawResponse.json()
          : rawResponse
      ) as InferResponse<E>;
      onSuccess?.(data, params, context);

      if (invalidates?.length) {
        for (const ep of invalidates) {
          this.queryClient.invalidateQuery(ep, {});
        }
      }
      return data;
    } catch (e) {
      error = e instanceof Error ? e : new Error(String(e));
      onError?.(error, params, context);
      throw error;
    } finally {
      onSettled?.(data, error, params, context);
    }
  }

  getCachedData<E extends Endpoint>(
    endpoint: E,
    params: InferParams<E>
  ): InferResponse<E> | undefined {
    return this.queryClient.getCachedData(endpoint, params) as
      | InferResponse<E>
      | undefined;
  }

  setCachedData<E extends Endpoint>(
    endpoint: E,
    params: InferParams<E>,
    data: InferResponse<E>
  ): void {
    this.queryClient.setCachedData(endpoint, params, data);
    this.persist();
  }

  invalidateQuery<E extends Endpoint>(
    endpoint: E,
    params: InferParams<E>
  ): void {
    this.queryClient.invalidateQuery(endpoint, params);
  }

  invalidateByPath(pattern: string | RegExp): void {
    this.queryClient.invalidateByPath(pattern);
  }

  removeQuery<E extends Endpoint>(endpoint: E, params: InferParams<E>): void {
    this.queryClient.removeQuery(endpoint, params);
  }

  /** Invalidate by serialized query key (devtools). */
  invalidateQueryByKey(key: string): void {
    this.queryClient.invalidateByKey(key);
  }

  /** Remove cache entry by serialized query key (devtools). */
  removeQueryByKey(key: string): void {
    this.queryClient.removeByKey(key);
  }

  /** Snapshot of cache, observer counts per key, and in-flight keys. */
  getDevToolsSnapshot(): KweriDevToolsSnapshot {
    return {
      cache: Array.from(this.store.entries()).map(([key, entry]) => ({
        key,
        entry
      })),
      observers: Array.from(this.observers.keys()).map((key) => ({
        key,
        count: this.observers.getObserverCount(key)
      })),
      inFlight: Array.from(this.orchestrator.keys())
    };
  }

  /** Subscribe to every cache notification (same keys as `subscribe` uses). */
  onCacheChange(
    callback: (key: string, entry: CacheEntry) => void
  ): () => void {
    return this.observers.subscribeAll(callback);
  }

  subscribe<E extends Endpoint>(
    endpoint: E,
    params: InferParams<E>,
    callback: (entry: CacheEntry) => void
  ): () => void {
    return this.queryClient.subscribe(endpoint, params, callback);
  }

  getQueryKey<E extends Endpoint>(endpoint: E, params: InferParams<E>): string {
    return this.queryClient.getQueryKey(endpoint, params);
  }

  isInFlight<E extends Endpoint>(endpoint: E, params: InferParams<E>): boolean {
    const key = this.queryClient.getQueryKey(endpoint, params);
    return this.orchestrator.isInFlight(key);
  }

  private async hydrate(adapter: PersistenceAdapter): Promise<void> {
    try {
      const saved = await adapter.restore();
      if (!saved || saved.version !== CACHE_VERSION) return;
      for (const [key, entry] of saved.entries) {
        if (entry.status === 'error') continue;
        // Two-step: create the entry, then force updatedAt: 0 so it's treated as stale.
        // CacheStore.set() creates new entries via createCacheEntry() which recalculates
        // updatedAt from data, so a second merge call is needed to override it.
        this.store.set(key, entry);
        this.store.set(key, { updatedAt: 0 });
      }
    } catch { /* non-fatal */ }
  }

  private persist(): void {
    if (!this.persistence) return;
    const adapter = this.persistence;
    const entries = Array.from(this.store.entries())
      .filter(([, entry]) => entry.status === 'success');
    adapter.save({ version: CACHE_VERSION, entries }).catch(() => { /* non-fatal */ });
  }

  startGC(intervalMs: number): void {
    this.eviction.start(intervalMs);
  }

  stopGC(): void {
    this.eviction.stop();
  }

  destroy(): void {
    this.devtoolsUnmount?.();
    this.devtoolsUnmount = undefined;
    this.eviction.stop();
    this.orchestrator.clear();
    this.observers.clearAll();
    this.store.clear();
  }
}
