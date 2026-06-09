import { describe, it, expect } from 'bun:test'
import { Kweri } from './index.js'
import { defineEndpoint } from '../contract/index.js'
import { Type } from '@sinclair/typebox'
import type { TimerAdapter } from '../eviction/index.js'

const getUsers = defineEndpoint({
  method: 'GET',
  path: '/users',
  params: Type.Object({}),
  response: Type.Unknown(),
})

/** Sync timer so retry backoff resolves instantly. */
function syncTimer(): TimerAdapter {
  return {
    setInterval: () => 0,
    clearInterval: () => {},
    setTimeout: (fn) => { fn(); return 0 },
    clearTimeout: () => {},
    now: () => Date.now(),
  }
}

describe('per-query options', () => {
  it('staleTime override keeps data fresh (no refetch) despite instance staleTime: 0', async () => {
    let calls = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test',
      staleTime: 0,
      fetcher: async () => { calls++; return { json: async () => [{ id: 1 }] } as any },
    })

    await kweri.query(getUsers, {}, { staleTime: 60_000 })
    await kweri.query(getUsers, {}, { staleTime: 60_000 })

    expect(calls).toBe(1)
    kweri.destroy()
  })

  it('without an override, instance staleTime: 0 refetches every call', async () => {
    let calls = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test',
      staleTime: 0,
      fetcher: async () => { calls++; return { json: async () => [{ id: 1 }] } as any },
    })

    await kweri.query(getUsers, {})
    await kweri.query(getUsers, {})

    expect(calls).toBe(2)
    kweri.destroy()
  })

  it('maxRetries override raises the attempt count for retryable errors', async () => {
    let calls = 0
    const kweri = new Kweri(
      {
        baseURL: 'https://api.test',
        maxRetries: 0, // instance default
        fetcher: async () => { calls++; throw new TypeError('network down') },
      },
      syncTimer(),
    )

    await expect(kweri.query(getUsers, {}, { maxRetries: 2 })).rejects.toThrow()
    expect(calls).toBe(3) // 1 initial + 2 retries
    kweri.destroy()
  })

  it('cacheTime override is stamped onto the cached entry', async () => {
    const kweri = new Kweri({
      baseURL: 'https://api.test',
      fetcher: async () => ({ json: async () => [{ id: 1 }] } as any),
    })

    await kweri.query(getUsers, {}, { cacheTime: 12_345 })
    const key = kweri.getQueryKey(getUsers, {})
    const snapshot = kweri.getDevToolsSnapshot()
    const entry = snapshot.cache.find((c) => c.key === key)?.entry

    expect(entry?.cacheTime).toBe(12_345)
    kweri.destroy()
  })
})
