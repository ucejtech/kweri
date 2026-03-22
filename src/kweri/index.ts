import { Type } from '@sinclair/typebox';
import type {
  Endpoint,
  InferParams,
  InferResponse
} from '../contract/index.js';
import type { Fetcher } from '../types/index.js';
import type { CacheEntry } from '../cache/cache-entry.js';
import { createCacheEntry, isFresh, categorizeError } from '../cache/index.js';
import { CacheStore } from '../cache/cache-store.js';
import { ObserverRegistry } from '../subscriptions/index.js';
import { QueryClient } from '../query-client/index.js';
import { ApiClient } from '../api-client/index.js';
import { FetchOrchestrator } from '../fetch-orchestrator/index.js';
import { EvictionEngine } from '../eviction/index.js';
import type { MutationOptions } from '../mutations/index.js';
import type { KweriDevToolsSnapshot } from './devtools-types.js';
import {
  mountKweriDevTools,
  type MountKweriDevToolsOptions
} from '../devtools/index.js';
import { isProductionRuntime } from '../runtime-env.js';
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

export class Kweri {
  readonly queryClient: QueryClient;
  readonly apiClient: ApiClient;

  private readonly store: CacheStore;
  private readonly observers: ObserverRegistry;
  private readonly orchestrator: FetchOrchestrator;
  private readonly eviction: EvictionEngine;
  private readonly defaultStaleTime: number;
  private readonly defaultCacheTime: number;
  private devtoolsUnmount: (() => void) | undefined;

  constructor(options: KweriOptions) {
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

    if (options.gcInterval) {
      this.eviction.start(options.gcInterval);
    }

    if (options.enableDevTools && !isProductionRuntime()) {
      this.devtoolsUnmount = mountKweriDevTools(this, options.devtools);
    }
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

        const entry = createCacheEntry({
          data,
          status: 'success',
          staleTime: this.defaultStaleTime,
          cacheTime: this.defaultCacheTime
        });
        this.store.set(key, entry);
        this.observers.notify(key, this.store.get(key)!);

        return data as InferResponse<E>;
      } catch (e) {
        const error = categorizeError(e);
        this.store.set(key, {
          status: 'error',
          error,
          errorUpdatedAt: Date.now()
        });
        this.observers.notify(key, this.store.get(key)!);
        throw e;
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
