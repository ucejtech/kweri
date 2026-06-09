import { describe, it, expect, beforeEach } from 'bun:test'
import {
  EvictionEngine,
  isEligibleForEviction,
  type TimerAdapter,
} from './index.js'
import { CacheStore } from '../cache/cache-store.js'
import { ObserverRegistry } from '../subscriptions/index.js'
import { createCacheEntry } from '../cache/index.js'

describe('isEligibleForEviction', () => {
  it('returns false when observerCount > 0', () => {
    const entry = createCacheEntry({
      data: 1,
      status: 'success',
      cacheTime: 1000,
    })
    expect(isEligibleForEviction(entry, 1, 9999)).toBe(false)
    expect(isEligibleForEviction(entry, 2, 9999)).toBe(false)
  })

  it('returns true when no observers and updatedAt is 0', () => {
    const entry = createCacheEntry({ status: 'idle' })
    expect(isEligibleForEviction(entry, 0, 1000)).toBe(true)
  })

  it('returns true when no observers and past cacheTime', () => {
    const entry = createCacheEntry({
      data: 1,
      status: 'success',
      cacheTime: 100,
    })
    const now = entry.updatedAt + 200
    expect(isEligibleForEviction(entry, 0, now)).toBe(true)
  })

  it('returns false when no observers but within cacheTime', () => {
    const entry = createCacheEntry({
      data: 1,
      status: 'success',
      cacheTime: 1000,
    })
    const now = entry.updatedAt + 100
    expect(isEligibleForEviction(entry, 0, now)).toBe(false)
  })
})

describe('EvictionEngine', () => {
  let store: CacheStore
  let observers: ObserverRegistry
  let getObserverCount: (key: string) => number

  beforeEach(() => {
    store = new CacheStore()
    observers = new ObserverRegistry()
    getObserverCount = (key: string) => observers.getObserverCount(key)
  })

  describe('sweep', () => {
    it('removes eligible entries (no observers, past cacheTime)', () => {
      const entry = createCacheEntry({
        data: 1,
        status: 'success',
        cacheTime: 10,
      })
      store.set('key1', entry)
      const now = entry.updatedAt + 100

      const engine = new EvictionEngine(store, getObserverCount, {
        setInterval: () => 0,
        clearInterval: () => {},
        setTimeout: () => 0,
        clearTimeout: () => {},
        now: () => now,
      })
      engine.sweep()

      expect(store.has('key1')).toBe(false)
    })

    it('does not remove entries with observers', () => {
      const entry = createCacheEntry({
        data: 1,
        status: 'success',
        cacheTime: 10,
      })
      store.set('key1', entry)
      observers.subscribe('key1', () => {})

      const now = entry.updatedAt + 100
      const engine = new EvictionEngine(store, getObserverCount, {
        setInterval: () => 0,
        clearInterval: () => {},
        setTimeout: () => 0,
        clearTimeout: () => {},
        now: () => now,
      })
      engine.sweep()

      expect(store.has('key1')).toBe(true)
    })

    it('does not remove entries within cacheTime', () => {
      const entry = createCacheEntry({
        data: 1,
        status: 'success',
        cacheTime: 10_000,
      })
      store.set('key1', entry)
      const now = entry.updatedAt + 100

      const engine = new EvictionEngine(store, getObserverCount, {
        setInterval: () => 0,
        clearInterval: () => {},
        setTimeout: () => 0,
        clearTimeout: () => {},
        now: () => now,
      })
      engine.sweep()

      expect(store.has('key1')).toBe(true)
    })

    it('removes only eligible entries in mixed scenario', () => {
      const oldEntry = createCacheEntry({
        data: 1,
        status: 'success',
        cacheTime: 10,
      })
      const newEntry = createCacheEntry({
        data: 2,
        status: 'success',
        cacheTime: 10_000,
      })
      store.set('old', oldEntry)
      store.set('new', newEntry)
      observers.subscribe('new', () => {})

      const now = oldEntry.updatedAt + 100
      const engine = new EvictionEngine(store, getObserverCount, {
        setInterval: () => 0,
        clearInterval: () => {},
        setTimeout: () => 0,
        clearTimeout: () => {},
        now: () => now,
      })
      engine.sweep()

      expect(store.has('old')).toBe(false)
      expect(store.has('new')).toBe(true)
    })
  })

  describe('start and stop', () => {
    it('calls sweep on interval when started', () => {
      const entry = createCacheEntry({
        data: 1,
        status: 'success',
        cacheTime: 10,
      })
      store.set('key1', entry)
      const now = entry.updatedAt + 100

      let sweepCount = 0
      const timer: TimerAdapter = {
        setInterval: (fn) => {
          fn()
          fn()
          return 123 as any
        },
        clearInterval: () => {},
        setTimeout: () => 0,
        clearTimeout: () => {},
        now: () => now,
      }
      const engine = new EvictionEngine(store, getObserverCount, {
        ...timer,
        setInterval: (fn) => {
          sweepCount++
          fn()
          return 123 as any
        },
      })

      expect(engine.isRunning).toBe(false)
      engine.start(1000)
      expect(engine.isRunning).toBe(true)
      expect(sweepCount).toBe(1)
      expect(store.has('key1')).toBe(false)

      engine.stop()
      expect(engine.isRunning).toBe(false)
    })

    it('stop clears interval', () => {
      let cleared = false
      const timer: TimerAdapter = {
        setInterval: () => 456 as any,
        clearInterval: (h) => {
          if (h === 456) cleared = true
        },
        setTimeout: () => 0,
        clearTimeout: () => {},
        now: () => Date.now(),
      }
      const engine = new EvictionEngine(store, getObserverCount, timer)
      engine.start(5000)
      engine.stop()
      expect(cleared).toBe(true)
    })
  })

  describe('auto mode (startAuto / ensureRunning)', () => {
    // A timer whose interval callbacks can be fired on demand.
    function manualTimer(now: () => number) {
      const intervals = new Map<number, () => void>()
      let id = 1
      const timer: TimerAdapter = {
        setInterval: (fn) => {
          const h = id++
          intervals.set(h, fn)
          return h
        },
        clearInterval: (h) => {
          intervals.delete(h as number)
        },
        setTimeout: () => 0,
        clearTimeout: () => {},
        now,
      }
      return {
        timer,
        running: () => intervals.size,
        tick: () => intervals.forEach((fn) => fn()),
      }
    }

    it('does not arm a timer when the cache is empty', () => {
      const mt = manualTimer(() => Date.now())
      const engine = new EvictionEngine(store, getObserverCount, mt.timer)
      engine.startAuto()
      expect(mt.running()).toBe(0)
    })

    it('arms when entries exist, self-stops when it empties', () => {
      const entry = createCacheEntry({ data: 1, status: 'success', cacheTime: 10 })
      store.set('k', entry)
      const mt = manualTimer(() => entry.updatedAt + 1000) // past cacheTime
      const engine = new EvictionEngine(store, getObserverCount, mt.timer)

      engine.startAuto()
      expect(mt.running()).toBe(1) // armed because cache is non-empty

      mt.tick() // sweep removes the expired, observer-less entry
      expect(store.size).toBe(0)
      expect(mt.running()).toBe(0) // self-stopped — nothing left to collect
    })

    it('rearms via ensureRunning after a new write', () => {
      const mt = manualTimer(() => Date.now())
      const engine = new EvictionEngine(store, getObserverCount, mt.timer)
      engine.startAuto()
      expect(mt.running()).toBe(0)

      store.set('k', createCacheEntry({ data: 1, status: 'success', cacheTime: 60_000 }))
      engine.ensureRunning()
      expect(mt.running()).toBe(1)
    })

    it('ensureRunning is a no-op outside auto mode', () => {
      const mt = manualTimer(() => Date.now())
      const engine = new EvictionEngine(store, getObserverCount, mt.timer)
      store.set('k', createCacheEntry({ data: 1, status: 'success' }))
      engine.ensureRunning() // never called startAuto
      expect(mt.running()).toBe(0)
    })
  })
})
