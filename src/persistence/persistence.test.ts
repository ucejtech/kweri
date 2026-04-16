import { describe, it, expect, mock, beforeEach } from 'bun:test'
import { Kweri } from '../kweri/index.js'
import { defineEndpoint } from '../contract/index.js'
import { Type } from '@sinclair/typebox'
import { CACHE_VERSION, type PersistenceAdapter, type SerializedCache } from './index.js'
import { createCacheEntry } from '../cache/index.js'
import type { TimerAdapter } from '../eviction/index.js'

const usersEndpoint = defineEndpoint({
  method: 'GET',
  path: '/users',
  params: Type.Object({}),
  response: Type.Array(Type.Object({ id: Type.Number(), name: Type.String() })),
})

function makeSyncTimer(): TimerAdapter {
  return {
    setInterval: () => 0,
    clearInterval: () => {},
    setTimeout: (fn) => { fn(); return 0 },
    clearTimeout: () => {},
    now: () => Date.now(),
  }
}

function makeMockAdapter(overrides: Partial<PersistenceAdapter> = {}): PersistenceAdapter & { saveCalls: SerializedCache[] } {
  const saveCalls: SerializedCache[] = []
  return {
    saveCalls,
    save: mock(async (data) => { saveCalls.push(data) }),
    restore: mock(async () => null),
    clear: mock(async () => {}),
    ...overrides,
  }
}

describe('PersistenceAdapter', () => {
  describe('hydration on construction', () => {
    it('restores success entries from adapter with updatedAt: 0', async () => {
      const entry = createCacheEntry({ data: [{ id: 1, name: 'Alice' }], status: 'success' })
      const saved: SerializedCache = {
        version: CACHE_VERSION,
        entries: [['key1', entry]],
      }
      const adapter = makeMockAdapter({ restore: async () => saved })
      const kweri = new Kweri({ baseURL: 'https://api.test.com', persistence: adapter }, makeSyncTimer())

      // Allow microtasks to flush
      await new Promise(r => setTimeout(r, 0))

      // Entry should be present but stale (updatedAt: 0)
      const cached = kweri.queryClient.getCachedData(usersEndpoint, {})
      // The entry was stored under the raw key 'key1'; access via queryClient directly
      // We verify by checking the store via getDevToolsSnapshot
      const snap = kweri.getDevToolsSnapshot()
      const restored = snap.cache.find(c => c.key === 'key1')
      expect(restored).toBeDefined()
      expect(restored!.entry.updatedAt).toBe(0)
      expect(restored!.entry.status).toBe('success')
    })

    it('discards saved cache when version mismatches', async () => {
      const entry = createCacheEntry({ data: [{ id: 1, name: 'Alice' }], status: 'success' })
      const saved: SerializedCache = { version: 0, entries: [['key1', entry]] }
      const adapter = makeMockAdapter({ restore: async () => saved })
      const kweri = new Kweri({ baseURL: 'https://api.test.com', persistence: adapter }, makeSyncTimer())

      await new Promise(r => setTimeout(r, 0))

      const snap = kweri.getDevToolsSnapshot()
      expect(snap.cache).toHaveLength(0)
    })

    it('handles null restore without error', async () => {
      const adapter = makeMockAdapter({ restore: async () => null })
      expect(() => new Kweri({ baseURL: 'https://api.test.com', persistence: adapter }, makeSyncTimer())).not.toThrow()
    })

    it('handles adapter throwing on restore without propagating', async () => {
      const adapter = makeMockAdapter({ restore: async () => { throw new Error('Storage unavailable') } })
      const kweri = new Kweri({ baseURL: 'https://api.test.com', persistence: adapter }, makeSyncTimer())

      await new Promise(r => setTimeout(r, 0))

      const snap = kweri.getDevToolsSnapshot()
      expect(snap.cache).toHaveLength(0)
    })

    it('skips error-status entries on hydration', async () => {
      const successEntry = createCacheEntry({ data: [{ id: 1, name: 'Alice' }], status: 'success' })
      const errorEntry = { ...createCacheEntry({ status: 'error' }), status: 'error' as const }
      const saved: SerializedCache = {
        version: CACHE_VERSION,
        entries: [['good', successEntry], ['bad', errorEntry]],
      }
      const adapter = makeMockAdapter({ restore: async () => saved })
      const kweri = new Kweri({ baseURL: 'https://api.test.com', persistence: adapter }, makeSyncTimer())

      await new Promise(r => setTimeout(r, 0))

      const snap = kweri.getDevToolsSnapshot()
      expect(snap.cache.find(c => c.key === 'good')).toBeDefined()
      expect(snap.cache.find(c => c.key === 'bad')).toBeUndefined()
    })
  })

  describe('persist on successful query', () => {
    it('calls adapter.save after a successful query', async () => {
      const mockData = [{ id: 1, name: 'Alice' }]
      const fetcher = mock(async () => ({ ok: true, json: async () => mockData } as any))
      const adapter = makeMockAdapter()
      const kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher, persistence: adapter }, makeSyncTimer())

      await kweri.query(usersEndpoint, {})

      expect(adapter.saveCalls.length).toBeGreaterThan(0)
      const saved = adapter.saveCalls[adapter.saveCalls.length - 1]
      expect(saved.version).toBe(CACHE_VERSION)
      expect(saved.entries.length).toBeGreaterThan(0)
    })

    it('persist only saves success-status entries', async () => {
      const mockData = [{ id: 1, name: 'Alice' }]
      const fetcher = mock(async () => ({ ok: true, json: async () => mockData } as any))
      const adapter = makeMockAdapter()
      const kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher, persistence: adapter }, makeSyncTimer())

      await kweri.query(usersEndpoint, {})

      const saved = adapter.saveCalls[adapter.saveCalls.length - 1]
      for (const [, entry] of saved.entries) {
        expect(entry.status).toBe('success')
      }
    })

    it('does not throw when adapter.save throws', async () => {
      const mockData = [{ id: 1, name: 'Alice' }]
      const fetcher = mock(async () => ({ ok: true, json: async () => mockData } as any))
      const adapter = makeMockAdapter({ save: async () => { throw new Error('Disk full') } })
      const kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher, persistence: adapter }, makeSyncTimer())

      await expect(kweri.query(usersEndpoint, {})).resolves.toEqual(mockData)
    })
  })
})
