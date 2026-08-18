import { describe, it, expect, mock, beforeEach, afterEach } from 'bun:test'
import { createReactQueryHooks } from './react.js'
import { Kweri } from '../kweri/index.js'
import { defineEndpoint } from '../contract/index.js'
import { Type } from '@sinclair/typebox'

const testEndpoint = defineEndpoint({
  method: 'GET',
  path: '/users',
  params: Type.Object({}),
  response: Type.Array(Type.Object({ id: Type.Number(), name: Type.String() })),
})

const mutationEndpoint = defineEndpoint({
  method: 'POST',
  path: '/users',
  params: Type.Object({
    body: Type.Object({ name: Type.String() }),
  }),
  response: Type.Object({ id: Type.Number(), name: Type.String() }),
})

describe('React Adapter', () => {
  let kweri: Kweri
  let mockUseSyncExternalStore: any
  let mockSubscribers: Set<Function>

  beforeEach(() => {
    kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => new Response(JSON.stringify([{ id: 1, name: 'Test User' }])),
    })

    mockSubscribers = new Set()
    
    // Mock React's useSyncExternalStore
    mockUseSyncExternalStore = mock((subscribe: Function, getSnapshot: Function) => {
      mockSubscribers.add(subscribe)
      return getSnapshot()
    })
  })

  // Tear down so background queries/subscriptions/timers don't bleed into the
  // next test (or the next file) and surface as "unhandled error between tests".
  afterEach(async () => {
    kweri.destroy()
    await new Promise((r) => setTimeout(r, 0))
  })

  describe('createReactQueryHooks', () => {
    it('should create useQuery hook', () => {
      const { useQuery } = createReactQueryHooks(mockUseSyncExternalStore, kweri)

      expect(typeof useQuery).toBe('function')
    })

    it('should create useMutation hook', () => {
      const { useMutation } = createReactQueryHooks(mockUseSyncExternalStore, kweri)

      expect(typeof useMutation).toBe('function')
    })

    it('useQuery should return query result structure', () => {
      const { useQuery } = createReactQueryHooks(mockUseSyncExternalStore, kweri)

      const result = useQuery(testEndpoint, {})

      expect(result).toHaveProperty('data')
      expect(result).toHaveProperty('status')
      expect(result).toHaveProperty('error')
      expect(result).toHaveProperty('isLoading')
      expect(result).toHaveProperty('isSuccess')
      expect(result).toHaveProperty('isError')
    })

    it('useMutation should return mutation result structure', () => {
      const { useMutation } = createReactQueryHooks(mockUseSyncExternalStore, kweri)

      const result = useMutation(mutationEndpoint)

      expect(result).toHaveProperty('mutate')
      expect(result).toHaveProperty('status')
      expect(result).toHaveProperty('error')
      expect(result).toHaveProperty('isLoading')
      expect(result).toHaveProperty('isSuccess')
      expect(result).toHaveProperty('isError')
      expect(typeof result.mutate).toBe('function')
    })

    it('should subscribe to cache changes', () => {
      const { useQuery } = createReactQueryHooks(mockUseSyncExternalStore, kweri)

      useQuery(testEndpoint, {})

      expect(mockSubscribers.size).toBeGreaterThan(0)
      expect(mockUseSyncExternalStore).toHaveBeenCalled()
    })

    it('should handle loading states', () => {
      const { useQuery } = createReactQueryHooks(mockUseSyncExternalStore, kweri)

      const result = useQuery(testEndpoint, {})

      // Initially should be in loading or idle state
      expect(['idle', 'loading'].includes(result.status)).toBe(true)
    })

    it('should respect enabled option', () => {
      const { useQuery } = createReactQueryHooks(mockUseSyncExternalStore, kweri)

      const result = useQuery(testEndpoint, {}, { enabled: false })

      expect(result.status).toBe('idle')
    })
  })
})

/**
 * Models what React actually does with useSyncExternalStore: re-runs `subscribe`
 * only when its identity changes, and re-reads `getSnapshot` on every render.
 * Holds one hook slot, so each harness drives a single hook call site.
 */
function createHarness() {
  const state = {
    subscribeFns: [] as Function[],
    snapshots: [] as any[],
    subscribeCount: 0,
    current: null as Function | null,
    unsubscribe: null as (() => void) | null,
    onStoreChange: null as (() => void) | null,
  }

  const useSyncExternalStore = ((subscribe: any, getSnapshot: any) => {
    state.subscribeFns.push(subscribe)
    const snapshot = getSnapshot()
    state.snapshots.push(snapshot)
    if (subscribe !== state.current) {
      state.unsubscribe?.()
      state.current = subscribe
      state.subscribeCount++
      state.unsubscribe = subscribe(() => state.onStoreChange?.())
    }
    return snapshot
  }) as any

  return { useSyncExternalStore, state }
}

function createRefSlots() {
  const slots: any[] = []
  let cursor = 0
  const useRef = ((initialValue: any) => {
    if (cursor >= slots.length) slots.push({ current: initialValue })
    return slots[cursor++]
  }) as any
  return { useRef, startRender: () => { cursor = 0 } }
}

const flush = () => new Promise((r) => setTimeout(r, 10))

describe('React Adapter — render stability', () => {
  let kweri: Kweri
  let fetchCount: number

  beforeEach(() => {
    fetchCount = 0
    kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => {
        fetchCount++
        return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
      },
    })
  })

  afterEach(async () => {
    kweri.destroy()
    await new Promise((r) => setTimeout(r, 0))
  })

  it('returns an identical snapshot across renders once the store is quiet', async () => {
    const { useSyncExternalStore, state } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    useQuery(testEndpoint, {})
    await flush()

    state.snapshots.length = 0
    for (let i = 0; i < 5; i++) useQuery(testEndpoint, {})

    expect(state.snapshots).toHaveLength(5)
    for (const snapshot of state.snapshots) {
      expect(snapshot).toBe(state.snapshots[0])
    }
  })

  it('keeps subscribe identity stable so React never re-subscribes', () => {
    const { useSyncExternalStore, state } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    for (let i = 0; i < 5; i++) useQuery(testEndpoint, {})

    const first = state.subscribeFns[0]
    for (const fn of state.subscribeFns) {
      expect(fn).toBe(first as Function)
    }
    expect(state.subscribeCount).toBe(1)
  })

  it('issues one request for many renders of the same query', async () => {
    const { useSyncExternalStore } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    for (let i = 0; i < 10; i++) useQuery(testEndpoint, {})
    await flush()

    expect(fetchCount).toBe(1)
  })

  it('is unaffected by fresh param objects of equal shape', () => {
    const { useSyncExternalStore, state } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    for (let i = 0; i < 3; i++) useQuery(testEndpoint, { query: {} } as any)

    expect(state.subscribeCount).toBe(1)
  })

  it('re-subscribes when params change', () => {
    const { useSyncExternalStore, state } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    useQuery(testEndpoint, { query: { page: 1 } } as any)
    useQuery(testEndpoint, { query: { page: 2 } } as any)

    expect(state.subscribeCount).toBe(2)
  })

  it('re-subscribes when enabled flips', () => {
    const { useSyncExternalStore, state } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    useQuery(testEndpoint, {}, { enabled: false })
    expect(fetchCount).toBe(0)

    useQuery(testEndpoint, {}, { enabled: true })
    expect(state.subscribeCount).toBe(2)
  })

  it('keeps the resolved status across later renders', async () => {
    const { useSyncExternalStore } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    useQuery(testEndpoint, {})
    await flush()

    const result = useQuery(testEndpoint, {})
    expect(result.status).toBe('success')
    expect(result.isSuccess).toBe(true)
    expect(result.data).toEqual([{ id: 1, name: 'Test User' }] as any)
  })

  it('starts from cached data instead of idle', async () => {
    kweri.setCachedData(testEndpoint, {}, [{ id: 9, name: 'Cached' }])

    const { useSyncExternalStore } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    const result = useQuery(testEndpoint, {})
    expect(result.status).toBe('success')
    expect(result.data).toEqual([{ id: 9, name: 'Cached' }] as any)
  })

  it('hands back a stable refetch across renders', () => {
    const { useSyncExternalStore } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    const first = useQuery(testEndpoint, {})
    const second = useQuery(testEndpoint, {})

    expect(second.refetch).toBe(first.refetch)
  })

  it('does not subscribe or fetch when disabled', async () => {
    const { useSyncExternalStore } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)

    const result = useQuery(testEndpoint, {}, { enabled: false })
    await flush()

    expect(result.status).toBe('idle')
    expect(fetchCount).toBe(0)
  })
})

describe('React Adapter — mutation state', () => {
  let kweri: Kweri

  beforeEach(() => {
    kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => new Response(JSON.stringify({ id: 1, name: 'Test User' })),
    })
  })

  afterEach(async () => {
    kweri.destroy()
    await new Promise((r) => setTimeout(r, 0))
  })

  it('survives re-renders and reports success', async () => {
    const { useSyncExternalStore } = createHarness()
    const { useRef, startRender } = createRefSlots()
    const { useMutation } = createReactQueryHooks({ useSyncExternalStore, useRef }, kweri)

    startRender()
    const first = useMutation(mutationEndpoint)
    expect(first.status).toBe('idle')

    await first.mutateAsync({ body: { name: 'Ada' } } as any)

    startRender()
    const second = useMutation(mutationEndpoint)
    expect(second.status).toBe('success')
    expect(second.isSuccess).toBe(true)

    second.reset()
    startRender()
    expect(useMutation(mutationEndpoint).status).toBe('idle')
  })

  it('reports errors', async () => {
    const failing = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => { throw new Error('boom') },
    })
    const { useSyncExternalStore } = createHarness()
    const { useRef, startRender } = createRefSlots()
    const { useMutation } = createReactQueryHooks({ useSyncExternalStore, useRef }, failing)

    startRender()
    await useMutation(mutationEndpoint).mutateAsync({ body: { name: 'Ada' } } as any).catch(() => {})

    startRender()
    const result = useMutation(mutationEndpoint)
    expect(result.status).toBe('error')
    expect(result.error?.message).toBe('boom')

    failing.destroy()
  })

  it('still tracks status when only useSyncExternalStore is injected', async () => {
    const { useSyncExternalStore } = createHarness()
    const { useMutation } = createReactQueryHooks(useSyncExternalStore, kweri)

    const first = useMutation(mutationEndpoint)
    await first.mutateAsync({ body: { name: 'Ada' } } as any)

    expect(useMutation(mutationEndpoint).status).toBe('success')
  })
})

describe('React Adapter — invalidation while mounted', () => {
  function mountedQuery(fetcher: () => Promise<Response>) {
    const kweri = new Kweri({ baseURL: 'https://api.test.com', fetcher })
    const { useSyncExternalStore, state } = createHarness()
    const { useQuery } = createReactQueryHooks(useSyncExternalStore, kweri)
    return { kweri, state, useQuery }
  }

  it('refetches a mounted query after invalidateByPath', async () => {
    let fetches = 0
    const { kweri, useQuery } = mountedQuery(async () => {
      fetches++
      return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
    })

    useQuery(testEndpoint, {})
    await flush()
    expect(fetches).toBe(1)

    kweri.invalidateByPath('/users')
    await flush()
    expect(fetches).toBe(2)

    kweri.destroy()
  })

  it('refetches a mounted query after invalidateQuery', async () => {
    let fetches = 0
    const { kweri, useQuery } = mountedQuery(async () => {
      fetches++
      return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
    })

    useQuery(testEndpoint, {})
    await flush()

    kweri.invalidateQuery(testEndpoint, {})
    await flush()
    expect(fetches).toBe(2)

    kweri.destroy()
  })

  it('does not loop when the refetch itself fails', async () => {
    let fetches = 0
    const { kweri, useQuery } = mountedQuery(async () => {
      fetches++
      throw new Error('boom')
    })

    useQuery(testEndpoint, {})
    await flush()
    expect(fetches).toBe(1)

    await flush()
    await flush()
    expect(fetches).toBe(1)

    kweri.destroy()
  })

  it('retries a failed query exactly once per invalidation', async () => {
    let fetches = 0
    const { kweri, useQuery } = mountedQuery(async () => {
      fetches++
      throw new Error('boom')
    })

    useQuery(testEndpoint, {})
    await flush()
    expect(fetches).toBe(1)

    kweri.invalidateQuery(testEndpoint, {})
    await flush()
    expect(fetches).toBe(2)

    await flush()
    await flush()
    expect(fetches).toBe(2)

    kweri.destroy()
  })

  it('coalesces co-subscribers into a single refetch', async () => {
    let fetches = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => {
        fetches++
        return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
      },
    })
    const a = createHarness()
    const b = createHarness()
    const { useQuery } = createReactQueryHooks(a.useSyncExternalStore, kweri)
    const hooksB = createReactQueryHooks(b.useSyncExternalStore, kweri)

    useQuery(testEndpoint, {})
    hooksB.useQuery(testEndpoint, {})
    await flush()
    const afterMount = fetches

    kweri.invalidateQuery(testEndpoint, {})
    await flush()
    expect(fetches).toBe(afterMount + 1)

    kweri.destroy()
  })

  it('does not refetch a disabled query on invalidation', async () => {
    let fetches = 0
    const { kweri, useQuery } = mountedQuery(async () => {
      fetches++
      return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
    })

    kweri.setCachedData(testEndpoint, {}, [{ id: 1, name: 'Cached' }] as any)
    useQuery(testEndpoint, {}, { enabled: false })
    await flush()

    kweri.invalidateQuery(testEndpoint, {})
    await flush()
    expect(fetches).toBe(0)

    kweri.destroy()
  })
})
