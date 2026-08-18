import { describe, it, expect, mock, beforeEach, afterEach } from 'bun:test'
import { createVueQueryHooks } from './vue.js'
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

describe('Vue Adapter', () => {
  let kweri: Kweri
  let mockVueAPI: any
  let mockRefs: Map<any, any>
  let mockWatchers: Array<Function>
  let mockUnmountCallbacks: Array<Function>

  beforeEach(() => {
    kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => new Response(JSON.stringify([{ id: 1, name: 'Test User' }])),
    })

    mockRefs = new Map()
    mockWatchers = []
    mockUnmountCallbacks = []

    // Mock Vue's reactivity API
    mockVueAPI = {
      ref: mock((initialValue: any) => {
        const refObj = { value: initialValue }
        mockRefs.set(refObj, initialValue)
        return refObj
      }),
      
      watch: mock((source: any, callback: Function, options?: any) => {
        mockWatchers.push(callback)
        
        // Simulate immediate execution if immediate: true
        if (options?.immediate) {
          callback(source.value, undefined)
        }
        
        return () => {} // unwatch function
      }),
      
      onUnmounted: mock((callback: Function) => {
        mockUnmountCallbacks.push(callback)
      }),
    }
  })

  // Tear down so background queries/subscriptions/timers don't bleed into the
  // next test (or the next file) and surface as "unhandled error between tests".
  afterEach(async () => {
    kweri.destroy()
    await new Promise((r) => setTimeout(r, 0))
  })

  describe('createVueQueryHooks', () => {
    it('should create useQuery composable', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI, kweri)

      expect(typeof useQuery).toBe('function')
    })

    it('should create useMutation composable', () => {
      const { useMutation } = createVueQueryHooks(mockVueAPI, kweri)

      expect(typeof useMutation).toBe('function')
    })

    it('useQuery should return reactive refs', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI, kweri)

      const result = useQuery(testEndpoint, {})

      expect(result).toHaveProperty('data')
      expect(result).toHaveProperty('status')
      expect(result).toHaveProperty('error')
      expect(result).toHaveProperty('isLoading')
      expect(result).toHaveProperty('isSuccess')
      expect(result).toHaveProperty('isError')

      // Should have created refs
      expect(mockVueAPI.ref).toHaveBeenCalled()
    })

    it('useMutation should return reactive refs and mutate function', () => {
      const { useMutation } = createVueQueryHooks(mockVueAPI, kweri)

      const result = useMutation(mutationEndpoint)

      expect(result).toHaveProperty('mutate')
      expect(result).toHaveProperty('status')
      expect(result).toHaveProperty('error')
      expect(result).toHaveProperty('isLoading')
      expect(result).toHaveProperty('isSuccess')
      expect(result).toHaveProperty('isError')
      expect(typeof result.mutate).toBe('function')
    })

    it('should set up watchers for reactive params', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI, kweri)

      const reactiveParams = mockVueAPI.ref({})
      useQuery(testEndpoint, reactiveParams)

      expect(mockVueAPI.watch).toHaveBeenCalled()
      expect(mockWatchers.length).toBeGreaterThan(0)
    })

    it('should register cleanup on unmount', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI, kweri)

      useQuery(testEndpoint, {})

      expect(mockVueAPI.onUnmounted).toHaveBeenCalled()
      expect(mockUnmountCallbacks.length).toBeGreaterThan(0)
    })

    it('should respect enabled option', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI, kweri)

      const result = useQuery(testEndpoint, {}, { enabled: mockVueAPI.ref(false) })

      // Should create the result structure but not start loading
      expect(result.status.value).toBe('idle')
    })

    it('should handle reactive enabled option', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI, kweri)

      const enabled = mockVueAPI.ref(false)
      useQuery(testEndpoint, {}, { enabled })

      // Should watch the enabled ref
      expect(mockVueAPI.watch).toHaveBeenCalledWith(
        expect.anything(),
        expect.any(Function),
        expect.objectContaining({ immediate: true })
      )
    })
  })
})
function vueApi() {
  const unmounts: Function[] = []
  return {
    api: {
      ref: (initialValue: any) => ({ value: initialValue }),
      watch: (source: any, callback: Function, options?: any) => {
        if (options?.immediate) callback(source?.value, undefined)
        return () => {}
      },
      onUnmounted: (callback: Function) => { unmounts.push(callback) },
    } as any,
    unmount: () => unmounts.forEach((fn) => fn()),
  }
}

const flushVue = () => new Promise((r) => setTimeout(r, 20))

describe('Vue Adapter — invalidation while mounted', () => {
  it('refetches a mounted query after invalidateByPath', async () => {
    let fetches = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => {
        fetches++
        return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
      },
    })
    const { api } = vueApi()
    const { useQuery } = createVueQueryHooks(api, kweri)

    useQuery(testEndpoint, {})
    await flushVue()
    const afterMount = fetches
    expect(afterMount).toBeGreaterThan(0)

    kweri.invalidateByPath('/users')
    await flushVue()
    expect(fetches).toBe(afterMount + 1)

    kweri.destroy()
  })

  it('surfaces the refetched data on the returned refs', async () => {
    let call = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => {
        call++
        return new Response(JSON.stringify([{ id: call, name: `User ${call}` }]))
      },
    })
    const { api } = vueApi()
    const { useQuery } = createVueQueryHooks(api, kweri)

    const result: any = useQuery(testEndpoint, {})
    await flushVue()
    const first = result.data.value

    kweri.invalidateQuery(testEndpoint, {})
    await flushVue()

    expect(result.status.value).toBe('success')
    expect(result.data.value).not.toEqual(first)

    kweri.destroy()
  })

  it('does not loop when the refetch itself fails', async () => {
    let fetches = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => { fetches++; throw new Error('boom') },
    })
    const { api } = vueApi()
    const { useQuery } = createVueQueryHooks(api, kweri)

    useQuery(testEndpoint, {})
    await flushVue()
    const afterMount = fetches

    await flushVue()
    await flushVue()
    expect(fetches).toBe(afterMount)

    kweri.destroy()
  })

  it('retries a failed query exactly once per invalidation', async () => {
    let fetches = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => { fetches++; throw new Error('boom') },
    })
    const { api } = vueApi()
    const { useQuery } = createVueQueryHooks(api, kweri)

    useQuery(testEndpoint, {})
    await flushVue()
    const afterMount = fetches

    kweri.invalidateQuery(testEndpoint, {})
    await flushVue()
    expect(fetches).toBe(afterMount + 1)

    await flushVue()
    await flushVue()
    expect(fetches).toBe(afterMount + 1)

    kweri.destroy()
  })

  it('does not refetch a disabled query on invalidation', async () => {
    let fetches = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => {
        fetches++
        return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
      },
    })
    kweri.setCachedData(testEndpoint, {}, [{ id: 1, name: 'Cached' }] as any)

    const { api } = vueApi()
    const { useQuery } = createVueQueryHooks(api, kweri)

    useQuery(testEndpoint, {}, { enabled: false })
    await flushVue()

    kweri.invalidateQuery(testEndpoint, {})
    await flushVue()
    expect(fetches).toBe(0)

    kweri.destroy()
  })

  it('stops refetching after unmount', async () => {
    let fetches = 0
    const kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: async () => {
        fetches++
        return new Response(JSON.stringify([{ id: 1, name: 'Test User' }]))
      },
    })
    const { api, unmount } = vueApi()
    const { useQuery } = createVueQueryHooks(api, kweri)

    useQuery(testEndpoint, {})
    await flushVue()
    const afterMount = fetches

    unmount()
    kweri.invalidateQuery(testEndpoint, {})
    await flushVue()
    expect(fetches).toBe(afterMount)

    kweri.destroy()
  })
})
