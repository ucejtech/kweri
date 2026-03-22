import type { CacheEntry } from '../cache/cache-entry.js'

export interface KweriDevToolsSnapshot {
  cache: Array<{ key: string; entry: CacheEntry }>
  observers: Array<{ key: string; count: number }>
  inFlight: string[]
}
