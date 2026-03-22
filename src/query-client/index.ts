import type { Endpoint } from '../contract/index.js'
import { CacheStore } from '../cache/cache-store.js'
import type { CacheEntry } from '../cache/cache-entry.js'
import { createCacheEntry } from '../cache/index.js'
import { ObserverRegistry } from '../subscriptions/index.js'
import {
  createQueryKey,
  serializeQueryKey,
  type QueryKey,
} from '../query-key/index.js'

/** Builds a stable string key from endpoint + params for cache lookup */
function getCacheKey(endpoint: Endpoint, params: unknown): string {
  const key: QueryKey = createQueryKey(
    endpoint.method,
    endpoint.path,
    params ?? {}
  )
  return serializeQueryKey(key)
}

export class QueryClient {
  constructor(
    private store: CacheStore,
    private observers: ObserverRegistry
  ) {}

  /** Returns the cache key for (endpoint, params) */
  getQueryKey<E extends Endpoint>(endpoint: E, params: unknown): string {
    return getCacheKey(endpoint, params)
  }

  /** Marks an entry stale (updatedAt: 0). Data is preserved; next access triggers refetch. Notifies observers. */
  invalidateQuery<E extends Endpoint>(endpoint: E, params: unknown): void {
    const key = getCacheKey(endpoint, params)
    this.invalidateByKey(key)
  }

  /** Same as invalidateQuery but uses the serialized cache key string (e.g. for devtools). */
  invalidateByKey(key: string): void {
    const entry = this.store.get(key)
    if (!entry) return

    const staleEntry: CacheEntry = { ...entry, updatedAt: 0 }
    this.store.set(key, { updatedAt: 0 })
    this.observers.notify(key, staleEntry)
  }

  /** Marks all entries whose key matches the pattern as stale. Pattern: substring (e.g. path prefix) or RegExp (tested against full key). */
  invalidateByPath(pattern: string | RegExp): void {
    const match = (k: string) =>
      typeof pattern === 'string' ? k.includes(pattern) : pattern.test(k)

    for (const key of this.store.keys()) {
      if (!match(key)) continue
      const entry = this.store.get(key)
      if (!entry) continue
      const staleEntry: CacheEntry = { ...entry, updatedAt: 0 }
      this.store.set(key, { updatedAt: 0 })
      this.observers.notify(key, staleEntry)
    }
  }

  /** Removes the entry from the cache and notifies observers with an empty entry. */
  removeQuery<E extends Endpoint>(endpoint: E, params: unknown): void {
    const key = getCacheKey(endpoint, params)
    this.removeByKey(key)
  }

  /** Same as removeQuery but uses the serialized cache key string (e.g. for devtools). */
  removeByKey(key: string): void {
    if (!this.store.has(key)) return

    const emptyEntry = createCacheEntry({ status: 'idle' })
    this.store.delete(key)
    this.observers.notify(key, emptyEntry)
  }

  /** Returns cached data for the query, or undefined if missing/not success. */
  getCachedData<E extends Endpoint>(endpoint: E, params: unknown): unknown {
    const key = getCacheKey(endpoint, params)
    const entry = this.store.get(key)
    return entry?.status === 'success' ? entry.data : undefined
  }

  /** Writes data into the cache (e.g. for optimistic updates). Notifies observers. */
  setCachedData<E extends Endpoint>(endpoint: E, params: unknown, data: unknown): void {
    const key = getCacheKey(endpoint, params)
    const entry = createCacheEntry({ data, status: 'success' })
    this.store.set(key, entry)
    this.observers.notify(key, this.store.get(key)!)
  }

  /** Subscribes to cache entry changes for (endpoint, params). */
  subscribe<E extends Endpoint>(
    endpoint: E,
    params: unknown,
    callback: (entry: CacheEntry) => void
  ): () => void {
    const key = getCacheKey(endpoint, params)
    return this.observers.subscribe(key, callback)
  }
}
