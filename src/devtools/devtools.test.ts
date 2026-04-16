import { describe, it, expect, beforeEach, afterEach } from 'bun:test'
import { mountKweriDevTools, loadDevToolsSettings, saveDevToolsSettings } from './mount.js'
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

  describe('loadDevToolsSettings', () => {
    beforeEach(() => {
      // Provide a minimal localStorage mock
      const store: Record<string, string> = {}
      global.localStorage = {
        getItem: (k: string) => store[k] ?? null,
        setItem: (k: string, v: string) => { store[k] = v },
        removeItem: (k: string) => { delete store[k] },
        clear: () => { Object.keys(store).forEach(k => delete store[k]) },
        length: 0,
        key: () => null,
      } as any
    })

    afterEach(() => {
      delete (global as any).localStorage
    })

    it('returns defaults when localStorage is empty', () => {
      const s = loadDevToolsSettings()
      expect(s).toEqual({ autoRefresh: true })
    })

    it('returns stored settings when present', () => {
      localStorage.setItem('kweri-devtools-settings', JSON.stringify({ autoRefresh: false }))
      const s = loadDevToolsSettings()
      expect(s.autoRefresh).toBe(false)
    })

    it('returns defaults when stored JSON is corrupt', () => {
      localStorage.setItem('kweri-devtools-settings', 'not-json{{{')
      const s = loadDevToolsSettings()
      expect(s).toEqual({ autoRefresh: true })
    })

    it('returns defaults when stored value is not an object', () => {
      localStorage.setItem('kweri-devtools-settings', '"a string"')
      const s = loadDevToolsSettings()
      expect(s).toEqual({ autoRefresh: true })
    })

    it('returns defaults when localStorage is unavailable', () => {
      delete (global as any).localStorage
      const s = loadDevToolsSettings()
      expect(s).toEqual({ autoRefresh: true })
    })
  })

  describe('saveDevToolsSettings', () => {
    beforeEach(() => {
      const store: Record<string, string> = {}
      global.localStorage = {
        getItem: (k: string) => store[k] ?? null,
        setItem: (k: string, v: string) => { store[k] = v },
        removeItem: (k: string) => { delete store[k] },
        clear: () => { Object.keys(store).forEach(k => delete store[k]) },
        length: 0,
        key: () => null,
      } as any
    })

    afterEach(() => {
      delete (global as any).localStorage
    })

    it('writes correct JSON to localStorage', () => {
      saveDevToolsSettings({ autoRefresh: false })
      const raw = localStorage.getItem('kweri-devtools-settings')
      expect(JSON.parse(raw!)).toEqual({ autoRefresh: false })
    })

    it('does not throw when localStorage.setItem throws', () => {
      global.localStorage = {
        ...global.localStorage,
        setItem: () => { throw new Error('QuotaExceededError') },
      } as any
      expect(() => saveDevToolsSettings({ autoRefresh: true })).not.toThrow()
    })

    it('does not throw when localStorage is unavailable', () => {
      delete (global as any).localStorage
      expect(() => saveDevToolsSettings({ autoRefresh: true })).not.toThrow()
    })
  })
})