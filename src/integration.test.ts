import { describe, it, expect, beforeEach } from 'bun:test'
import { Kweri } from './kweri/index.js'
import { defineEndpoint } from './contract/index.js'
import { Type } from '@sinclair/typebox'

const getUsers = defineEndpoint({
  method: 'GET',
  path: '/users',
  params: Type.Object({}),
  response: Type.Array(Type.Object({ id: Type.Number(), name: Type.String() })),
})

const getUserById = defineEndpoint({
  method: 'GET',
  path: '/users/{id}',
  params: Type.Object({
    path: Type.Object({ id: Type.Number() }),
  }),
  response: Type.Object({ id: Type.Number(), name: Type.String() }),
})

const createUser = defineEndpoint({
  method: 'POST',
  path: '/users',
  params: Type.Object({
    body: Type.Object({ name: Type.String() }),
  }),
  response: Type.Object({ id: Type.Number(), name: Type.String() }),
})

describe('Integration Tests', () => {
  let kweri: Kweri
  let fetchCount: number
  
  const mockUsers = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]

  beforeEach(() => {
    fetchCount = 0
    
    kweri = new Kweri({
      baseURL: 'https://api.test.com',
      staleTime: 1000,
      cacheTime: 5000,
      fetcher: async (opts) => {
        fetchCount++
        
        if (opts.url.includes('/users') && opts.method === 'GET') {
          if (opts.url.includes('/users/1')) {
            return new Response(JSON.stringify({ id: 1, name: 'Alice' }))
          }
          return new Response(JSON.stringify(mockUsers))
        }
        
        if (opts.url.includes('/users') && opts.method === 'POST') {
          const newUser = { id: 3, name: 'Charlie' }
          return new Response(JSON.stringify(newUser))
        }
        
        throw new Error(`Unexpected request: ${opts.method} ${opts.url}`)
      },
    })
  })

  describe('Query + Cache + Observers Integration', () => {
    it('should execute end-to-end query flow', async () => {
      const result = await kweri.query(getUsers, {})
      
      expect(result).toEqual(mockUsers)
      expect(fetchCount).toBe(1)
    })

    it('should serve from cache when fresh', async () => {
      // First request
      const result1 = await kweri.query(getUsers, {})
      expect(result1).toEqual(mockUsers)
      expect(fetchCount).toBe(1)

      // Second request should use cache
      const result2 = await kweri.query(getUsers, {})
      expect(result2).toEqual(mockUsers)
      expect(fetchCount).toBe(1) // No additional fetch
    })

    it('should deduplicate concurrent requests', async () => {
      // Start multiple concurrent requests
      const promises = [
        kweri.query(getUsers, {}),
        kweri.query(getUsers, {}),
        kweri.query(getUsers, {}),
      ]

      const results = await Promise.all(promises)
      
      // All should return same data
      results.forEach(result => {
        expect(result).toEqual(mockUsers)
      })
      
      // But only one network request should have been made
      expect(fetchCount).toBe(1)
    })

    it('should notify observers of cache changes', async () => {
      let notificationCount = 0
      let lastEntry: any = null

      const unsubscribe = kweri.subscribe(getUsers, {}, (entry) => {
        notificationCount++
        lastEntry = entry
      })

      // Trigger query
      await kweri.query(getUsers, {})

      expect(notificationCount).toBeGreaterThan(0)
      expect(lastEntry).toBeTruthy()
      expect(lastEntry.status).toBe('success')
      expect(lastEntry.data).toEqual(mockUsers)

      unsubscribe()
    })

    it('should invalidate cache and refetch', async () => {
      // Initial query
      await kweri.query(getUsers, {})
      expect(fetchCount).toBe(1)

      // Invalidate
      kweri.invalidateQuery(getUsers, {})

      // Next query should fetch again
      await kweri.query(getUsers, {})
      expect(fetchCount).toBe(2)
    })
  })

  describe('Mutation + Invalidation Integration', () => {
    it('should execute mutation with invalidation', async () => {
      // Prime cache with users list
      await kweri.query(getUsers, {})
      expect(fetchCount).toBe(1)

      // Execute mutation that invalidates users list
      const newUser = await kweri.mutate(createUser, { body: { name: 'Charlie' } }, {
        invalidates: [getUsers]
      })

      expect(newUser).toEqual({ id: 3, name: 'Charlie' })
      expect(fetchCount).toBe(2)

      // Next query should refetch because of invalidation
      await kweri.query(getUsers, {})
      expect(fetchCount).toBe(3)
    })

    it('should handle mutation errors', async () => {
      const errorKweri = new Kweri({
        baseURL: 'https://api.test.com',
        fetcher: async () => {
          throw new Error('Network error')
        },
      })

      await expect(errorKweri.mutate(createUser, { body: { name: 'Charlie' } }))
        .rejects
        .toThrow('Network error')
    })
  })

  describe('DevTools Integration', () => {
    it('should capture cache state in devtools snapshot', async () => {
      // Execute some queries
      await kweri.query(getUsers, {})
      await kweri.query(getUserById, { path: { id: 1 } })

      const snapshot = kweri.getDevToolsSnapshot()

      expect(snapshot.cache).toHaveLength(2)
      expect(snapshot.observers).toHaveLength(0) // No active subscriptions
      expect(snapshot.inFlight).toHaveLength(0) // No pending requests
    })

    it('should track in-flight requests', async () => {
      // Start a slow request
      const slowKweri = new Kweri({
        baseURL: 'https://api.test.com',
        fetcher: async () => {
          await new Promise(resolve => setTimeout(resolve, 100))
          return new Response(JSON.stringify(mockUsers))
        },
      })

      // Start request but don't await
      const promise = slowKweri.query(getUsers, {})
      
      // Should show as in-flight
      const snapshot = slowKweri.getDevToolsSnapshot()
      expect(snapshot.inFlight.length).toBeGreaterThan(0)

      // Complete request
      await promise

      // Should no longer be in-flight
      const snapshot2 = slowKweri.getDevToolsSnapshot()
      expect(snapshot2.inFlight).toHaveLength(0)
    })

    it('should track active observers', () => {
      let observerCount = 0

      // Subscribe to endpoint
      const unsubscribe = kweri.subscribe(getUsers, {}, () => {
        observerCount++
      })

      const snapshot = kweri.getDevToolsSnapshot()
      expect(snapshot.observers).toHaveLength(1)
      expect(snapshot.observers[0].count).toBe(1)

      unsubscribe()

      const snapshot2 = kweri.getDevToolsSnapshot()
      expect(snapshot2.observers).toHaveLength(0)
    })
  })

  describe('Error Handling Integration', () => {
    it('should handle network errors gracefully', async () => {
      const errorKweri = new Kweri({
        baseURL: 'https://api.test.com',
        fetcher: async () => {
          throw new Error('Network failure')
        },
      })

      await expect(errorKweri.query(getUsers, {}))
        .rejects
        .toThrow('Network failure')

      // Should cache error state
      const snapshot = errorKweri.getDevToolsSnapshot()
      expect(snapshot.cache).toHaveLength(1)
      expect(snapshot.cache[0].entry.status).toBe('error')
    })

    it('should retry after error when cache expires', async () => {
      let shouldFail = true
      
      const retryKweri = new Kweri({
        baseURL: 'https://api.test.com',
        staleTime: 0, // Immediate staleness
        fetcher: async () => {
          if (shouldFail) {
            shouldFail = false
            throw new Error('First attempt fails')
          }
          return new Response(JSON.stringify(mockUsers))
        },
      })

      // First attempt should fail
      await expect(retryKweri.query(getUsers, {})).rejects.toThrow()

      // Second attempt should succeed
      const result = await retryKweri.query(getUsers, {})
      expect(result).toEqual(mockUsers)
    })
  })

  describe('Performance Integration', () => {
    it('should handle high-frequency queries efficiently', async () => {
      const start = performance.now()
      
      // Execute 100 identical queries
      const promises = Array.from({ length: 100 }, () => 
        kweri.query(getUsers, {})
      )
      
      const results = await Promise.all(promises)
      const end = performance.now()

      // All should return same data
      results.forEach(result => {
        expect(result).toEqual(mockUsers)
      })

      // Should only make one network request due to deduplication
      expect(fetchCount).toBe(1)
      
      // Should complete reasonably quickly
      expect(end - start).toBeLessThan(1000)
    })
  })
})