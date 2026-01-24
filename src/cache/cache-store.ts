import { createCacheEntry, type CacheEntry } from './cache-entry'

/**
 * Central cache storage with Map-based CRUD operations.
 */
export class CacheStore {
  private cache = new Map<string, CacheEntry>()

  /**
   * Retrieves a cache entry by key.
   * 
   * @param key - Serialized query key
   * @returns Cache entry if exists, undefined otherwise
   */
  get(key: string): CacheEntry | undefined {
    return this.cache.get(key)
  }

  /**
   * Sets or updates a cache entry with partial data.
   * 
   * If an entry exists at the given key, the partial update is merged into it.
   * If no entry exists, a new entry is created with defaults from createCacheEntry.
   * 
   * @param key - Serialized query key
   * @param partial - Partial cache entry to merge
   */
  set(key: string, partial: Partial<CacheEntry>): void {
    const existing = this.cache.get(key)
    
    if (existing) {
      this.cache.set(key, { ...existing, ...partial })
    } else {
      const newEntry = createCacheEntry(partial)
      this.cache.set(key, newEntry)
    }
  }

  /**
   * Removes a cache entry by key.
   * 
   * @param key - Serialized query key
   * @returns true if entry existed and was deleted, false otherwise
   */
  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  /**
   * Checks if a cache entry exists for the given key.
   * 
   * @param key - Serialized query key
   */
  has(key: string): boolean {
    return this.cache.has(key)
  }

  /**
   * Returns an iterator over all cache entries.
   * 
   * @returns Iterator of [key, entry] tuples
   */
  entries(): IterableIterator<[string, CacheEntry]> {
    return this.cache.entries()
  }

  /**
   * Returns an iterator over all cache keys.
   * 
   * @returns Iterator of keys
   */
  keys(): IterableIterator<string> {
    return this.cache.keys()
  }

  /**
   * Returns an iterator over all cache entry values.
   * 
   * @returns Iterator of cache entries
   */
  values(): IterableIterator<CacheEntry> {
    return this.cache.values()
  }

  /**
   * Returns the number of entries in the cache.
   * 
   * @returns Cache size
   */
  get size(): number {
    return this.cache.size
  }

  /**
   * Removes all entries from the cache.
   */
  clear(): void {
    this.cache.clear()
  }
}
