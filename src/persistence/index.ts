import type { CacheEntry } from '../cache/cache-entry.js'

export const CACHE_VERSION = 1

export interface SerializedCache {
  version: number
  entries: Array<[string, CacheEntry]>
}

export interface PersistenceAdapter {
  save(data: SerializedCache): Promise<void>
  restore(): Promise<SerializedCache | null>
  clear(): Promise<void>
}
