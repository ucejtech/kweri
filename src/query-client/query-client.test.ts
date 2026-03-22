import { describe, it, expect, beforeEach } from 'bun:test'
import { QueryClient } from './index.js'
import { CacheStore } from '../cache/cache-store.js'
import { ObserverRegistry } from '../subscriptions/index.js'
import { createCacheEntry } from '../cache/index.js'
import type { Endpoint } from '../contract/index.js'

const getUsersEndpoint: Endpoint = {
  method: 'GET',
  path: '/users',
  params: {} as any,
  response: {} as any,
}

const getUserEndpoint: Endpoint = {
  method: 'GET',
  path: '/users/{id}',
  params: {} as any,
  response: {} as any,
}

describe('QueryClient', () => {
  let store: CacheStore
  let observers: ObserverRegistry
  let client: QueryClient

  beforeEach(() => {
    store = new CacheStore()
    observers = new ObserverRegistry()
    client = new QueryClient(store, observers)
  })

  describe('getQueryKey', () => {
    it('returns stable key for same endpoint and params', () => {
      const k1 = client.getQueryKey(getUsersEndpoint, {})
      const k2 = client.getQueryKey(getUsersEndpoint, {})
      expect(k1).toBe(k2)
    })

    it('returns different keys for different params', () => {
      const k1 = client.getQueryKey(getUserEndpoint, { id: '1' })
      const k2 = client.getQueryKey(getUserEndpoint, { id: '2' })
      expect(k1).not.toBe(k2)
    })
  })

  describe('invalidateQuery', () => {
    it('marks entry stale (updatedAt: 0) and notifies observers', () => {
      const key = client.getQueryKey(getUsersEndpoint, {})
      const entry = createCacheEntry({
        data: { list: [] },
        status: 'success',
        updatedAt: Date.now(),
      })
      store.set(key, entry)

      const notified: unknown[] = []
      observers.subscribe(key, (e) => notified.push(e))

      client.invalidateQuery(getUsersEndpoint, {})

      const after = store.get(key)
      expect(after?.updatedAt).toBe(0)
      expect(after?.data).toEqual({ list: [] })
      expect(notified).toHaveLength(1)
      expect((notified[0] as any).updatedAt).toBe(0)
    })

    it('no-op when entry does not exist', () => {
      const key = client.getQueryKey(getUsersEndpoint, {})
      const notified: unknown[] = []
      observers.subscribe(key, (e) => notified.push(e))

      client.invalidateQuery(getUsersEndpoint, {})

      expect(store.has(key)).toBe(false)
      expect(notified).toHaveLength(0)
    })
  })

  describe('invalidateByPath', () => {
    it('marks all keys matching string pattern as stale', () => {
      const key1 = client.getQueryKey(getUsersEndpoint, {})
      const key2 = client.getQueryKey(getUserEndpoint, { id: '1' })
      const key3 = client.getQueryKey(
        { method: 'GET', path: '/posts', params: {} as any, response: {} as any },
        {}
      )
      store.set(key1, createCacheEntry({ data: 1, status: 'success', updatedAt: 100 }))
      store.set(key2, createCacheEntry({ data: 2, status: 'success', updatedAt: 200 }))
      store.set(key3, createCacheEntry({ data: 3, status: 'success', updatedAt: 300 }))

      client.invalidateByPath('/users')

      expect(store.get(key1)?.updatedAt).toBe(0)
      expect(store.get(key2)?.updatedAt).toBe(0)
      expect(store.get(key3)?.updatedAt).not.toBe(0)
    })

    it('marks all keys matching RegExp as stale', () => {
      const key1 = client.getQueryKey(getUsersEndpoint, {})
      const key2 = client.getQueryKey(getUserEndpoint, { id: '1' })
      store.set(key1, createCacheEntry({ data: 1, status: 'success', updatedAt: 100 }))
      store.set(key2, createCacheEntry({ data: 2, status: 'success', updatedAt: 200 }))

      client.invalidateByPath(/\/users/)

      expect(store.get(key1)?.updatedAt).toBe(0)
      expect(store.get(key2)?.updatedAt).toBe(0)
    })
  })

  describe('removeQuery', () => {
    it('deletes entry and notifies observers with empty entry', () => {
      const key = client.getQueryKey(getUsersEndpoint, {})
      store.set(key, createCacheEntry({ data: { x: 1 }, status: 'success' }))

      const notified: unknown[] = []
      observers.subscribe(key, (e) => notified.push(e))

      client.removeQuery(getUsersEndpoint, {})

      expect(store.has(key)).toBe(false)
      expect(notified).toHaveLength(1)
      expect((notified[0] as any).status).toBe('idle')
      expect((notified[0] as any).data).toBeUndefined()
    })

    it('no-op when entry does not exist', () => {
      const key = client.getQueryKey(getUsersEndpoint, {})
      const notified: unknown[] = []
      observers.subscribe(key, (e) => notified.push(e))

      client.removeQuery(getUsersEndpoint, {})

      expect(notified).toHaveLength(0)
    })
  })

  describe('getCachedData', () => {
    it('returns data when entry is success', () => {
      const key = client.getQueryKey(getUsersEndpoint, {})
      store.set(key, createCacheEntry({ data: { list: [1, 2] }, status: 'success' }))

      expect(client.getCachedData(getUsersEndpoint, {})).toEqual({ list: [1, 2] })
    })

    it('returns undefined when entry missing or not success', () => {
      expect(client.getCachedData(getUsersEndpoint, {})).toBeUndefined()

      const key = client.getQueryKey(getUsersEndpoint, {})
      store.set(key, createCacheEntry({ status: 'loading' }))
      expect(client.getCachedData(getUsersEndpoint, {})).toBeUndefined()
    })
  })

  describe('setCachedData', () => {
    it('writes data and notifies observers', () => {
      const notified: unknown[] = []
      const key = client.getQueryKey(getUsersEndpoint, {})
      observers.subscribe(key, (e) => notified.push(e))

      client.setCachedData(getUsersEndpoint, {}, { list: [1, 2, 3] })

      expect(client.getCachedData(getUsersEndpoint, {})).toEqual({ list: [1, 2, 3] })
      expect(notified).toHaveLength(1)
      expect((notified[0] as any).data).toEqual({ list: [1, 2, 3] })
    })
  })
})
