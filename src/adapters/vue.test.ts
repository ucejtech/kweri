import { describe, it, expect, mock, beforeEach } from 'bun:test'
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

  describe('createVueQueryHooks', () => {
    it('should create useQuery composable', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI)
      
      expect(typeof useQuery).toBe('function')
    })

    it('should create useMutation composable', () => {
      const { useMutation } = createVueQueryHooks(mockVueAPI)
      
      expect(typeof useMutation).toBe('function')
    })

    it('useQuery should return reactive refs', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI)
      
      const result = useQuery(kweri, testEndpoint, {})
      
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
      const { useMutation } = createVueQueryHooks(mockVueAPI)
      
      const result = useMutation(kweri, mutationEndpoint)
      
      expect(result).toHaveProperty('mutate')
      expect(result).toHaveProperty('status')
      expect(result).toHaveProperty('error')
      expect(result).toHaveProperty('isLoading')
      expect(result).toHaveProperty('isSuccess')
      expect(result).toHaveProperty('isError')
      expect(typeof result.mutate).toBe('function')
    })

    it('should set up watchers for reactive params', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI)
      
      const reactiveParams = mockVueAPI.ref({})
      useQuery(kweri, testEndpoint, reactiveParams)
      
      expect(mockVueAPI.watch).toHaveBeenCalled()
      expect(mockWatchers.length).toBeGreaterThan(0)
    })

    it('should register cleanup on unmount', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI)
      
      useQuery(kweri, testEndpoint, {})
      
      expect(mockVueAPI.onUnmounted).toHaveBeenCalled()
      expect(mockUnmountCallbacks.length).toBeGreaterThan(0)
    })

    it('should respect enabled option', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI)
      
      const result = useQuery(kweri, testEndpoint, {}, { enabled: mockVueAPI.ref(false) })
      
      // Should create the result structure but not start loading
      expect(result.status.value).toBe('idle')
    })

    it('should handle reactive enabled option', () => {
      const { useQuery } = createVueQueryHooks(mockVueAPI)
      
      const enabled = mockVueAPI.ref(false)
      const result = useQuery(kweri, testEndpoint, {}, { enabled })
      
      // Should watch the enabled ref
      expect(mockVueAPI.watch).toHaveBeenCalledWith(
        expect.anything(),
        expect.any(Function),
        expect.objectContaining({ immediate: true })
      )
    })
  })
})