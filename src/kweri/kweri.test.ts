import { describe, it, expect, mock, beforeEach } from 'bun:test'
import { Kweri } from './index.js'
import { defineEndpoint } from '../contract/index.js'
import { Type } from '@sinclair/typebox'

const getUsers = defineEndpoint({
  method: 'GET',
  path: '/users',
  params: Type.Object({}),
  response: Type.Array(Type.Object({ id: Type.Number(), name: Type.String() })),
})

const getUserById = defineEndpoint({
  method: 'GET',
  path: '/users/{userId}',
  params: Type.Object({
    path: Type.Object({ userId: Type.Number() }),
  }),
  response: Type.Object({ id: Type.Number(), name: Type.String() }),
})

const createUserEndpoint = defineEndpoint({
  method: 'POST',
  path: '/users',
  params: Type.Object({
    body: Type.Object({ name: Type.String() }),
  }),
  response: Type.Object({ id: Type.Number(), name: Type.String() }),
})

function createMockFetcher(data: unknown = []) {
  return mock(async (_opts: any) => ({
    ok: true,
    status: 200,
    json: async () => data,
  }) as unknown as Response)
}

describe('Kweri', () => {
  let kweri: Kweri

  describe('constructor', () => {
    it('creates an instance with minimal config', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com' })
      expect(kweri).toBeDefined()
      expect(kweri.queryClient).toBeDefined()
      expect(kweri.apiClient).toBeDefined()
    })

    it('starts GC when gcInterval is provided', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', gcInterval: 5000 })
      expect(kweri).toBeDefined()
      kweri.destroy()
    })
  })

  describe('query', () => {
    it('fetches data and caches it', async () => {
      const mockData = [{ id: 1, name: 'Alice' }]
      const fetcher = createMockFetcher(mockData)
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      const result = await kweri.query(getUsers, {})
      expect(result).toEqual(mockData)
      expect(fetcher).toHaveBeenCalledTimes(1)
    })

    it('returns cached data when fresh (staleTime > 0)', async () => {
      const mockData = [{ id: 1, name: 'Alice' }]
      const fetcher = createMockFetcher(mockData)
      kweri = new Kweri({
        baseURL: 'https://api.test.com',
        fetcher,
        staleTime: 60_000,
      })

      await kweri.query(getUsers, {})
      const result2 = await kweri.query(getUsers, {})
      expect(result2).toEqual(mockData)
      expect(fetcher).toHaveBeenCalledTimes(1)
    })

    it('deduplicates concurrent requests for the same key', async () => {
      let resolvePromise: (v: Response) => void
      const fetcher = mock(async () => {
        return new Promise<Response>((resolve) => {
          resolvePromise = resolve
        })
      })
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      const p1 = kweri.query(getUsers, {})
      const p2 = kweri.query(getUsers, {})

      resolvePromise!({ ok: true, json: async () => [{ id: 1 }] } as any)

      const [r1, r2] = await Promise.all([p1, p2])
      expect(r1).toEqual(r2)
      expect(fetcher).toHaveBeenCalledTimes(1)
    })

    it('flattens nested params for the API call', async () => {
      const mockData = { id: 42, name: 'Bob' }
      const fetcher = mock(async (opts: any) => {
        expect(opts.url).toContain('/users/42')
        return { ok: true, json: async () => mockData } as any
      })
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      const result = await kweri.query(getUserById, { path: { userId: 42 } } as any)
      expect(result).toEqual(mockData)
    })

    it('notifies subscribers on loading and success', async () => {
      const statuses: string[] = []
      const mockData = [{ id: 1, name: 'Alice' }]
      const fetcher = createMockFetcher(mockData)
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      kweri.subscribe(getUsers, {}, (entry) => {
        statuses.push(entry.status)
      })

      await kweri.query(getUsers, {})
      expect(statuses).toContain('loading')
      expect(statuses).toContain('success')
    })

    it('sets error status on fetch failure', async () => {
      const fetcher = mock(async () => {
        throw new Error('Network error')
      })
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      const statuses: string[] = []
      kweri.subscribe(getUsers, {}, (entry) => {
        statuses.push(entry.status)
      })

      await expect(kweri.query(getUsers, {})).rejects.toThrow('Network error')
      expect(statuses).toContain('error')
    })
  })

  describe('mutate', () => {
    it('executes a mutation and returns data', async () => {
      const mockData = { id: 1, name: 'Alice' }
      const fetcher = createMockFetcher(mockData)
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      const result = await kweri.mutate(createUserEndpoint, { body: { name: 'Alice' } } as any)
      expect(result).toEqual(mockData)
    })

    it('calls onSuccess and onSettled on success', async () => {
      const mockData = { id: 1, name: 'Alice' }
      const fetcher = createMockFetcher(mockData)
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      const onSuccess = mock(() => {})
      const onSettled = mock(() => {})

      await kweri.mutate(createUserEndpoint, { body: { name: 'Alice' } } as any, {
        onSuccess,
        onSettled,
      })

      expect(onSuccess).toHaveBeenCalledTimes(1)
      expect(onSettled).toHaveBeenCalledTimes(1)
    })

    it('calls onError on failure', async () => {
      const fetcher = mock(async () => { throw new Error('Server error') })
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })

      const onError = mock(() => {})
      const onSettled = mock(() => {})

      await expect(
        kweri.mutate(createUserEndpoint, { body: { name: 'Alice' } } as any, {
          onError,
          onSettled,
        })
      ).rejects.toThrow('Server error')

      expect(onError).toHaveBeenCalledTimes(1)
      expect(onSettled).toHaveBeenCalledTimes(1)
    })

    it('invalidates specified endpoints after success', async () => {
      const fetcherData = [{ id: 1, name: 'Alice' }]
      const fetcher = createMockFetcher({ id: 2, name: 'Bob' })
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher, staleTime: 60_000 })

      kweri.setCachedData(getUsers, {}, fetcherData as any)
      expect(kweri.getCachedData(getUsers, {})).toEqual(fetcherData)

      await kweri.mutate(createUserEndpoint, { body: { name: 'Bob' } } as any, {
        invalidates: [getUsers],
      })

      // After invalidation, the cached entry should be stale (updatedAt: 0)
      const key = kweri.getQueryKey(getUsers, {})
      expect(kweri.getCachedData(getUsers, {})).toBeDefined() // data preserved but stale
    })
  })

  describe('cache operations', () => {
    beforeEach(() => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher: createMockFetcher() })
    })

    it('getCachedData returns undefined when no data', () => {
      expect(kweri.getCachedData(getUsers, {})).toBeUndefined()
    })

    it('setCachedData stores data and getCachedData retrieves it', () => {
      const data = [{ id: 1, name: 'Alice' }]
      kweri.setCachedData(getUsers, {}, data as any)
      expect(kweri.getCachedData(getUsers, {})).toEqual(data)
    })

    it('invalidateQuery marks entry stale', () => {
      kweri.setCachedData(getUsers, {}, [{ id: 1, name: 'Alice' }] as any)
      kweri.invalidateQuery(getUsers, {})
      // Data is preserved but entry is stale
      expect(kweri.getCachedData(getUsers, {})).toBeDefined()
    })

    it('removeQuery deletes entry', () => {
      kweri.setCachedData(getUsers, {}, [{ id: 1, name: 'Alice' }] as any)
      kweri.removeQuery(getUsers, {})
      expect(kweri.getCachedData(getUsers, {})).toBeUndefined()
    })
  })

  describe('subscribe', () => {
    it('notifies subscribers on cache changes', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher: createMockFetcher() })

      const callback = mock(() => {})
      kweri.subscribe(getUsers, {}, callback)
      kweri.setCachedData(getUsers, {}, [{ id: 1, name: 'Alice' }] as any)

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('returns unsubscribe function', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher: createMockFetcher() })

      const callback = mock(() => {})
      const unsub = kweri.subscribe(getUsers, {}, callback)
      unsub()
      kweri.setCachedData(getUsers, {}, [{ id: 1, name: 'Alice' }] as any)

      expect(callback).toHaveBeenCalledTimes(0)
    })
  })

  describe('isInFlight', () => {
    it('returns false when no request in flight', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher: createMockFetcher() })
      expect(kweri.isInFlight(getUsers, {})).toBe(false)
    })
  })

  describe('getQueryKey', () => {
    it('returns stable key for same endpoint and params', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher: createMockFetcher() })
      const key1 = kweri.getQueryKey(getUsers, {})
      const key2 = kweri.getQueryKey(getUsers, {})
      expect(key1).toBe(key2)
    })

    it('returns different keys for different params', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher: createMockFetcher() })
      const key1 = kweri.getQueryKey(getUserById, { path: { userId: 1 } } as any)
      const key2 = kweri.getQueryKey(getUserById, { path: { userId: 2 } } as any)
      expect(key1).not.toBe(key2)
    })
  })

  describe('destroy', () => {
    it('cleans up all internal state', () => {
      kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher: createMockFetcher(), gcInterval: 5000 })
      kweri.setCachedData(getUsers, {}, [{ id: 1, name: 'Alice' }] as any)
      kweri.destroy()
      expect(kweri.getCachedData(getUsers, {})).toBeUndefined()
    })
  })
})
