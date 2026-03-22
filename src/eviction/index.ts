import type { CacheStore } from '../cache/cache-store.js'
import type { CacheEntry } from '../cache/cache-entry.js'

export interface TimerAdapter {
  setInterval: (fn: () => void, ms: number) => number | NodeJS.Timeout
  clearInterval: (handle: number | NodeJS.Timeout) => void
  now: () => number
}

const defaultTimer: TimerAdapter = {
  setInterval: (fn, ms) => setInterval(fn, ms),
  clearInterval: (handle) => clearInterval(handle),
  now: () => Date.now(),
}

/**
 * Returns true if the entry can be evicted: no observers and past cacheTime (or never updated).
 */
export function isEligibleForEviction(
  entry: CacheEntry,
  observerCount: number,
  now: number = Date.now()
): boolean {
  if (observerCount > 0) return false
  if (entry.updatedAt === 0) return true
  return now > entry.updatedAt + entry.cacheTime
}

export class EvictionEngine {
  private intervalId: number | NodeJS.Timeout | null = null
  private timer: TimerAdapter

  constructor(
    private store: CacheStore,
    private getObserverCount: (key: string) => number,
    timer?: TimerAdapter
  ) {
    this.timer = timer ?? defaultTimer
  }

  /** Remove all entries that are eligible for eviction (no observers, past cacheTime). */
  sweep(): void {
    const now = this.timer.now()
    const toDelete: string[] = []

    for (const [key, entry] of this.store.entries()) {
      const count = this.getObserverCount(key)
      if (isEligibleForEviction(entry, count, now)) {
        toDelete.push(key)
      }
    }

    for (const key of toDelete) {
      this.store.delete(key)
    }
  }

  /** Start periodic GC every `intervalMs`. */
  start(intervalMs: number): void {
    this.stop()
    this.intervalId = this.timer.setInterval(() => this.sweep(), intervalMs)
  }

  /** Stop periodic GC. */
  stop(): void {
    if (this.intervalId !== null) {
      this.timer.clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  get isRunning(): boolean {
    return this.intervalId !== null
  }
}
