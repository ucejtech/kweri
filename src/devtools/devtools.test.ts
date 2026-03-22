import { describe, it, expect, beforeEach, afterEach } from 'bun:test'
import { mountKweriDevTools } from './mount.js'
import { Kweri } from '../kweri/index.js'
import { defineEndpoint } from '../contract/index.js'
import { Type } from '@sinclair/typebox'

// Mock DOM environment
const mockFetch = async () => new Response(JSON.stringify({ data: 'test' }))

const testEndpoint = defineEndpoint({
  method: 'GET',
  path: '/test',
  params: Type.Object({}),
  response: Type.Object({ data: Type.String() }),
})

describe('DevTools', () => {
  let kweri: Kweri
  let unmount: (() => void) | undefined

  beforeEach(() => {
    kweri = new Kweri({
      baseURL: 'https://api.test.com',
      fetcher: mockFetch,
    })
    
    // Mock DOM globals
    global.document = {
      createElement: (tag: string) => ({
        tagName: tag.toUpperCase(),
        className: '',
        innerHTML: '',
        textContent: '',
        setAttribute: () => {},
        getAttribute: () => null,
        addEventListener: () => {},
        append: () => {},
        appendChild: () => {},
        remove: () => {},
        querySelector: () => null,
        querySelectorAll: () => [],
        attachShadow: () => ({ append: () => {} }),
        replaceChildren: () => {},
      }),
      body: {
        appendChild: () => {},
      },
    } as any
    
    global.window = {
      setTimeout: (fn: Function, delay: number) => setTimeout(fn, delay),
      clearTimeout: clearTimeout,
      setInterval: (fn: Function, delay: number) => setInterval(fn, delay),
      clearInterval: clearInterval,
      requestAnimationFrame: (fn: Function) => setTimeout(fn, 16),
    } as any
  })

  afterEach(() => {
    if (unmount) {
      unmount()
      unmount = undefined
    }
  })

  describe('mountKweriDevTools', () => {
    it('should mount devtools and return unmount function', () => {
      unmount = mountKweriDevTools(kweri)
      
      expect(typeof unmount).toBe('function')
    })

    it('should mount with custom position', () => {
      unmount = mountKweriDevTools(kweri, { position: 'bottom-left' })
      
      expect(typeof unmount).toBe('function')
    })

    it('should handle SSR environment gracefully', () => {
      const originalDocument = global.document
      delete (global as any).document

      unmount = mountKweriDevTools(kweri)
      expect(typeof unmount).toBe('function')

      global.document = originalDocument
    })

    it('should capture cache changes in event log', async () => {
      unmount = mountKweriDevTools(kweri)
      
      // Trigger a query to create cache activity
      await kweri.query(testEndpoint, {})
      
      const snapshot = kweri.getDevToolsSnapshot()
      expect(snapshot.cache.length).toBeGreaterThan(0)
    })

    it('should handle invalidation operations', () => {
      unmount = mountKweriDevTools(kweri)
      
      // Should not throw when invalidating
      expect(() => {
        kweri.invalidateByPath(/.*/)
      }).not.toThrow()
    })
  })
})