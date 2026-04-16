import { describe, it, expect, mock, beforeEach } from 'bun:test'
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