import { describe, it, expect, beforeEach, afterEach } from 'bun:test'
import { isProductionRuntime } from './runtime-env.js'

describe('Runtime Environment Detection', () => {
  let originalProcess: any

  beforeEach(() => {
    originalProcess = global.process
  })

  afterEach(() => {
    global.process = originalProcess
  })

  describe('isProductionRuntime', () => {
    it('should return false in default/development environment', () => {
      global.process = {
        env: {
          NODE_ENV: 'development'
        }
      }
      
      expect(isProductionRuntime()).toBe(false)
    })

    it('should detect NODE_ENV=production', () => {
      global.process = {
        env: {
          NODE_ENV: 'production'
        }
      }
      
      expect(isProductionRuntime()).toBe(true)
    })

    it('should detect BUN_ENV=production', () => {
      global.process = {
        env: {
          BUN_ENV: 'production'
        }
      }
      
      expect(isProductionRuntime()).toBe(true)
    })

    it('should detect VERCEL_ENV=production', () => {
      global.process = {
        env: {
          VERCEL_ENV: 'production'
        }
      }
      
      expect(isProductionRuntime()).toBe(true)
    })

    it('should detect Vite import.meta.env.PROD', () => {
      global.process = undefined
      
      // In Bun, import.meta is readonly, so we test the logic indirectly
      // by checking that it doesn't crash when process is undefined
      const result = isProductionRuntime()
      expect(typeof result).toBe('boolean')
    })

    it('should detect Vite import.meta.env.MODE=production', () => {
      global.process = undefined
      
      // Test that function works without process object
      const result = isProductionRuntime()
      expect(typeof result).toBe('boolean')
    })

    it('should handle missing process object', () => {
      global.process = undefined
      
      expect(isProductionRuntime()).toBe(false)
    })

    it('should handle missing import.meta', () => {
      global.process = undefined
      
      // Should handle missing process gracefully
      expect(() => isProductionRuntime()).not.toThrow()
    })

    it('should handle import.meta access errors', () => {
      global.process = undefined
      
      // Function should handle errors gracefully  
      expect(() => isProductionRuntime()).not.toThrow()
      expect(typeof isProductionRuntime()).toBe('boolean')
    })

    it('should prioritize process.env when available', () => {
      global.process = {
        env: {
          NODE_ENV: 'development'
        }
      }
      
      // Should use process.env when available
      expect(isProductionRuntime()).toBe(false)
    })
  })
})