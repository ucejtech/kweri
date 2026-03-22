import { describe, it, expect } from 'bun:test'
import { parseQueryKey, relativeTime, collectRowKeys, observerCountFor, entryForKey, methodPillClass } from './helpers.js'
import type { KweriDevToolsSnapshot } from '../kweri/devtools-types.js'
import { createCacheEntry } from '../cache/index.js'

describe('DevTools Helpers', () => {
  describe('parseQueryKey', () => {
    it('should parse complete query key', () => {
      const result = parseQueryKey('GET:/users:{"limit":10}')
      
      expect(result).toEqual({
        method: 'GET',
        path: '/users',
        params: '{"limit":10}'
      })
    })

    it('should handle key without params', () => {
      const result = parseQueryKey('POST:/users')
      
      expect(result).toEqual({
        method: 'POST',
        path: '/users',
        params: ''
      })
    })

    it('should handle malformed key', () => {
      const result = parseQueryKey('invalid-key')
      
      expect(result).toEqual({
        method: '?',
        path: 'invalid-key',
        params: ''
      })
    })

    it('should handle key with method only', () => {
      const result = parseQueryKey('GET:')
      
      expect(result).toEqual({
        method: 'GET',
        path: '',
        params: ''
      })
    })
  })

  describe('relativeTime', () => {
    const now = Date.now()

    it('should return "just now" for very recent times', () => {
      expect(relativeTime(now - 2000)).toBe('just now')
    })

    it('should return seconds for recent times', () => {
      expect(relativeTime(now - 30000)).toBe('30s ago')
    })

    it('should return minutes for medium times', () => {
      expect(relativeTime(now - 300000)).toBe('5m ago')
    })

    it('should return hours for old times', () => {
      expect(relativeTime(now - 7200000)).toBe('2h ago')
    })

    it('should handle zero timestamp', () => {
      expect(relativeTime(0)).toBe('—')
    })

    it('should handle negative timestamp', () => {
      expect(relativeTime(-100)).toBe('—')
    })
  })

  describe('collectRowKeys', () => {
    it('should collect unique keys from cache, observers, and inFlight', () => {
      const snapshot: KweriDevToolsSnapshot = {
        cache: [
          { key: 'GET:/users:', entry: createCacheEntry({ status: 'success', data: [] }) },
          { key: 'GET:/posts:', entry: createCacheEntry({ status: 'success', data: [] }) }
        ],
        observers: [
          { key: 'GET:/users:', count: 2 },
          { key: 'GET:/comments:', count: 1 }
        ],
        inFlight: ['GET:/loading:', 'POST:/creating:']
      }

      const keys = collectRowKeys(snapshot)
      
      expect(keys).toEqual([
        'GET:/comments:',
        'GET:/loading:',
        'GET:/posts:',
        'GET:/users:',
        'POST:/creating:'
      ])
    })

    it('should handle empty snapshot', () => {
      const snapshot: KweriDevToolsSnapshot = {
        cache: [],
        observers: [],
        inFlight: []
      }

      const keys = collectRowKeys(snapshot)
      
      expect(keys).toEqual([])
    })

    it('should deduplicate keys across different sources', () => {
      const snapshot: KweriDevToolsSnapshot = {
        cache: [
          { key: 'GET:/users:', entry: createCacheEntry({ status: 'success', data: [] }) }
        ],
        observers: [
          { key: 'GET:/users:', count: 1 }
        ],
        inFlight: ['GET:/users:']
      }

      const keys = collectRowKeys(snapshot)
      
      expect(keys).toEqual(['GET:/users:'])
    })
  })

  describe('observerCountFor', () => {
    it('should return observer count for key', () => {
      const snapshot: KweriDevToolsSnapshot = {
        cache: [],
        observers: [
          { key: 'GET:/users:', count: 3 },
          { key: 'GET:/posts:', count: 1 }
        ],
        inFlight: []
      }

      expect(observerCountFor(snapshot, 'GET:/users:')).toBe(3)
      expect(observerCountFor(snapshot, 'GET:/posts:')).toBe(1)
    })

    it('should return 0 for non-existent key', () => {
      const snapshot: KweriDevToolsSnapshot = {
        cache: [],
        observers: [
          { key: 'GET:/users:', count: 3 }
        ],
        inFlight: []
      }

      expect(observerCountFor(snapshot, 'GET:/missing:')).toBe(0)
    })
  })

  describe('entryForKey', () => {
    it('should return cache entry for key', () => {
      const entry1 = createCacheEntry({ status: 'success', data: [] })
      const entry2 = createCacheEntry({ status: 'loading' })
      
      const snapshot: KweriDevToolsSnapshot = {
        cache: [
          { key: 'GET:/users:', entry: entry1 },
          { key: 'GET:/posts:', entry: entry2 }
        ],
        observers: [],
        inFlight: []
      }

      expect(entryForKey(snapshot, 'GET:/users:')).toBe(entry1)
      expect(entryForKey(snapshot, 'GET:/posts:')).toBe(entry2)
    })

    it('should return undefined for non-existent key', () => {
      const snapshot: KweriDevToolsSnapshot = {
        cache: [
          { key: 'GET:/users:', entry: createCacheEntry({ status: 'success', data: [] }) }
        ],
        observers: [],
        inFlight: []
      }

      expect(entryForKey(snapshot, 'GET:/missing:')).toBeUndefined()
    })
  })

  describe('methodPillClass', () => {
    it('should return correct class for standard HTTP methods', () => {
      expect(methodPillClass('GET')).toBe('get')
      expect(methodPillClass('POST')).toBe('post')
      expect(methodPillClass('PUT')).toBe('put')
      expect(methodPillClass('PATCH')).toBe('patch')
      expect(methodPillClass('DELETE')).toBe('delete')
    })

    it('should handle lowercase methods', () => {
      expect(methodPillClass('get')).toBe('get')
      expect(methodPillClass('post')).toBe('post')
    })

    it('should return "other" for non-standard methods', () => {
      expect(methodPillClass('HEAD')).toBe('other')
      expect(methodPillClass('OPTIONS')).toBe('other')
      expect(methodPillClass('CUSTOM')).toBe('other')
      expect(methodPillClass('')).toBe('other')
    })
  })
})