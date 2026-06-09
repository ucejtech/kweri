import type { CacheStore } from '../cache/cache-store.js'
import type { CacheEntry } from '../cache/cache-entry.js'

export interface TimerAdapter {
  setInterval: (fn: () => void, ms: number) => number | NodeJS.Timeout
  clearInterval: (handle: number | NodeJS.Timeout) => void
  setTimeout: (fn: () => void, ms: number) => number | NodeJS.Timeout
  clearTimeout: (handle: number | NodeJS.Timeout) => void
  now: () => number
}

const defaultTimer: TimerAdapter = {
  setInterval: (fn, ms) => setInterval(fn, ms),
  clearInterval: (handle) => clearInterval(handle),
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (handle) => clearTimeout(handle as any),
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

const DEFAULT_AUTO_INTERVAL = 60_000

export class EvictionEngine {
  private intervalId: number | NodeJS.Timeout | null = null
  private timer: TimerAdapter

  private autoMode = false
  private autoIntervalMs = DEFAULT_AUTO_INTERVAL
  private visibilityHandler: (() => void) | null = null

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

  /** Fixed-interval GC (explicit `gcInterval` / `startGC`). */
  start(intervalMs: number): void {
    this.autoMode = false
    this.pause()
    this.intervalId = this.timer.setInterval(() => this.sweep(), intervalMs)
  }

  /**
   * Self-stopping, visibility-aware GC that honors `cacheTime` without an
   * explicit interval. Only armed while the cache is non-empty and the tab is
   * visible; callers gate this on a browser environment so SSR never arms a timer.
   */
  startAuto(intervalMs: number = DEFAULT_AUTO_INTERVAL): void {
    this.autoMode = true
    this.autoIntervalMs = intervalMs

    if (
      typeof document !== 'undefined' &&
      typeof document.addEventListener === 'function' &&
      !this.visibilityHandler
    ) {
      this.visibilityHandler = () => {
        if (document.visibilityState === 'hidden') this.pause()
        else this.ensureRunning()
      }
      document.addEventListener('visibilitychange', this.visibilityHandler)
    }

    this.ensureRunning()
  }

  /** Arm the auto-GC timer if it should run and isn't already. Call after cache writes. */
  ensureRunning(): void {
    if (!this.autoMode || this.intervalId !== null) return
    if (this.store.size === 0) return
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return
    this.intervalId = this.timer.setInterval(() => this.autoTick(), this.autoIntervalMs)
  }

  private autoTick(): void {
    this.sweep()
    if (this.store.size === 0) this.pause() // ensureRunning() rearms on the next write
  }

  private pause(): void {
    if (this.intervalId !== null) {
      this.timer.clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  stop(): void {
    this.pause()
  }

  /** Full teardown: stop the timer and remove the visibility listener. */
  dispose(): void {
    this.autoMode = false
    this.pause()
    if (
      this.visibilityHandler &&
      typeof document !== 'undefined' &&
      typeof document.removeEventListener === 'function'
    ) {
      document.removeEventListener('visibilitychange', this.visibilityHandler)
      this.visibilityHandler = null
    }
  }

  get isRunning(): boolean {
    return this.intervalId !== null
  }
}
