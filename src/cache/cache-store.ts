import { createCacheEntry, type CacheEntry } from './cache-entry'

/** Map-based cache storage for query results */
export class CacheStore {
  private cache = new Map<string, CacheEntry>()

  get(key: string): CacheEntry | undefined {
    return this.cache.get(key)
  }

  /** Merges partial updates into existing entries, creates new entry if none exists */
  set(key: string, partial: Partial<CacheEntry>): void {
    const existing = this.cache.get(key)
    
    if (existing) {
      this.cache.set(key, { ...existing, ...partial })
    } else {
      const newEntry = createCacheEntry(partial)
      this.cache.set(key, newEntry)
    }
  }

  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  has(key: string): boolean {
    return this.cache.has(key)
  }

  entries(): IterableIterator<[string, CacheEntry]> {
    return this.cache.entries()
  }

  keys(): IterableIterator<string> {
    return this.cache.keys()
  }

  values(): IterableIterator<CacheEntry> {
    return this.cache.values()
  }

  get size(): number {
    return this.cache.size
  }

  clear(): void {
    this.cache.clear()
  }
}
