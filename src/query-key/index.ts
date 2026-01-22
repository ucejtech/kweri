/**
 * QueryKey tuple type representing [method, path, params]
 * 
 * @example
 * const key: QueryKey = ['GET', '/users/{id}', { id: '123' }]
 */
export type QueryKey = readonly [method: string, path: string, params: unknown]

/**
 * Normalized query key with serialized params for stable comparison.
 * This is the canonical form used internally for cache storage and comparison.
 */
export type NormalizedKey = readonly [method: string, path: string, serializedParams: string]

/**
 * Development mode detection.
 * Validation and error checking are only performed in development for performance.
 */
const isDevelopment = typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production'

/**
 * Options for query key serialization and hashing.
 */
export interface QueryKeyOptions {
  /**
   * Maximum length before hashing is applied.
   * If serialized key exceeds this length, a hash is computed for cache storage.
   * Set to 0 to disable hashing, or Infinity to always use hashing.
   * @default 1024
   */
  hashThreshold?: number
  
  /**
   * Whether to drop undefined keys from objects during serialization.
   * If true, { a: 1, b: undefined } serializes the same as { a: 1 }.
   * If false, undefined values are preserved as "undefined".
   * @default true
   */
  dropUndefinedKeys?: boolean
}

const defaultOptions: Required<QueryKeyOptions> = {
  hashThreshold: 1024,
  dropUndefinedKeys: true,
}

/**
 * Normalizes a QueryKey into its canonical NormalizedKey form.
 * This is the internal representation used for cache storage and comparison.
 * 
 * @param key - QueryKey tuple to normalize
 * @param options - Serialization options
 * @returns NormalizedKey tuple with serialized params
 */
export function normalizeQueryKey(
  key: QueryKey,
  options: QueryKeyOptions = {}
): NormalizedKey {
  const opts = { ...defaultOptions, ...options }
  const [method, path, params] = key
  
  if (isDevelopment) {
    if (!isValidQueryKeyValue(params)) {
      throw new Error(
        'Invalid query key parameters: contains functions, symbols, or circular references. ' +
        'Query keys must be serializable to JSON.'
      )
    }
  }
  
  const serializedParams = stableSerialize(params, opts)
  return [method, path, serializedParams] as const
}

/**
 * Deep serialization with stable key ordering.
 * 
 * This function ensures that objects with the same keys in different orders
 * produce identical serialized strings:
 * 
 * stableSerialize({a: 1, b: 2}) === stableSerialize({b: 2, a: 1}) // true
 * 
 * ⚠️ WARNING: Assumes inputs are valid (no functions, symbols, or circular refs).
 * Use isValidQueryKeyValue() to validate before calling in development mode.
 * 
 * @param value - Value to serialize (can be primitive, array, or object)
 * @param options - Serialization options
 * @returns Deterministic JSON-like string representation
 * @throws Error if value contains functions or symbols (fail-fast)
 */
export function stableSerialize(
  value: unknown,
  options: QueryKeyOptions = {}
): string {
  const opts = { ...defaultOptions, ...options }
  
  if (typeof value === 'function') {
    throw new Error(
      'Cannot serialize function in query key. Functions are not serializable.'
    )
  }
  
  if (typeof value === 'symbol') {
    throw new Error(
      'Cannot serialize symbol in query key. Symbols are not serializable.'
    )
  }
  
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  
  if (typeof value !== 'object') {
    // Special number handling: NaN, Infinity, -Infinity
    if (typeof value === 'number') {
      if (Number.isNaN(value)) return '"NaN"'
      if (value === Infinity) return '"Infinity"'
      if (value === -Infinity) return '"-Infinity"'
    }
    return JSON.stringify(value)
  }
  
  if (Array.isArray(value)) {
    return '[' + value.map(item => stableSerialize(item, opts)).join(',') + ']'
  }
  
  if (value instanceof Date) {
    return JSON.stringify(value.toISOString())
  }
  
  // Sort keys alphabetically for deterministic output
  const obj = value as Record<string, unknown>
  const keys = Object.keys(obj)
  
  const filteredKeys = opts.dropUndefinedKeys
    ? keys.filter(key => obj[key] !== undefined)
    : keys
  
  const sortedKeys = filteredKeys.sort()
  
  const pairs = sortedKeys.map(key => {
    const serializedValue = stableSerialize(obj[key], opts)
    return `${JSON.stringify(key)}:${serializedValue}`
  })
  
  return '{' + pairs.join(',') + '}'
}

/**
 * Serializes a QueryKey tuple into a stable cache key string.
 * 
 * The resulting string is deterministic and can be used as a Map key.
 * For very long keys, consider using hashQueryKey() for better performance.
 * 
 * @param key - QueryKey tuple [method, path, params]
 * @param options - Serialization options
 * @returns Stable string representation suitable for cache keys
 * 
 * @example
 * const key = serializeQueryKey(['GET', '/users/{id}', { id: '123' }])
 */
export function serializeQueryKey(
  key: QueryKey,
  options: QueryKeyOptions = {}
): string {
  const normalized = normalizeQueryKey(key, options)
  const [method, path, serializedParams] = normalized
  return `${method}:${path}:${serializedParams}`
}

/**
 * Hashes a serialized query key for use as a cache key.
 * Useful for very long keys to reduce memory usage.
 * 
 * The original serialized string is preserved for debugging purposes.
 * 
 * @param serializedKey - Serialized query key string
 * @returns Object with both hash (for storage) and original (for debugging)
 */
export async function hashQueryKey(serializedKey: string): Promise<{
  hash: string
  original: string
}> {
  // Check if crypto.subtle is available (browser/Node.js 15+)
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder()
    const data = encoder.encode(serializedKey)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return { hash: hashHex, original: serializedKey }
  }
  
  // Fallback: simple hash for environments without crypto.subtle
  let hash = 0
  for (let i = 0; i < serializedKey.length; i++) {
    const char = serializedKey.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  const hashHex = Math.abs(hash).toString(16)
  return { hash: hashHex, original: serializedKey }
}

/**
 * Serializes a QueryKey with automatic hashing for long keys.
 * 
 * If the serialized key exceeds hashThreshold, it is hashed for storage.
 * The original serialized string is preserved for debugging.
 * 
 * @param key - QueryKey tuple to serialize
 * @param options - Serialization options including hashThreshold
 * @returns Serialized key string, or hash if key exceeds threshold
 */
export async function serializeQueryKeyWithHash(
  key: QueryKey,
  options: QueryKeyOptions = {}
): Promise<string> {
  const opts = { ...defaultOptions, ...options }
  const serialized = serializeQueryKey(key, opts)
  
  if (serialized.length > opts.hashThreshold) {
    const hashed = await hashQueryKey(serialized)
    return hashed.hash
  }
  
  return serialized
}

/**
 * Creates a QueryKey from an endpoint definition and parameters.
 * 
 * This is a convenience factory function that ensures proper typing
 * and structure of query keys.
 * 
 * @param method - HTTP method (GET, POST, PUT, PATCH, DELETE)
 * @param path - Path template (e.g., '/users/{id}')
 * @param params - Parameters object (will be serialized)
 * @returns QueryKey tuple
 * 
 * @example
 * const key = createQueryKey('GET', '/users/{id}', { id: '123' })
 */
export function createQueryKey(
  method: string,
  path: string,
  params: unknown
): QueryKey {
  return [method, path, params] as const
}

/**
 * Validates that a value can be safely used in a query key.
 * 
 * ⚠️ WARNING: Functions, Symbols, and circular references cannot be serialized
 * and will cause cache misses or errors.
 * 
 * This function only runs in development mode for performance.
 * In production, validation is skipped.
 * 
 * @param value - Value to validate
 * @returns true if value is safe to use in query keys
 */
export function isValidQueryKeyValue(value: unknown): boolean {
  if (!isDevelopment) {
    return true
  }
  
  if (value === null || value === undefined) return true
  if (typeof value === 'function') return false
  if (typeof value === 'symbol') return false
  
  if (typeof value === 'object') {
    // Check for circular references using shared WeakSet
    const seen = new WeakSet()
    try {
      const check = (obj: unknown, visited: WeakSet<object>): boolean => {
        if (obj === null || typeof obj !== 'object') return true
        if (visited.has(obj as object)) return false
        visited.add(obj as object)
        
        if (Array.isArray(obj)) {
          return obj.every(item => check(item, visited))
        }
        
        return Object.values(obj as Record<string, unknown>).every(
          val => check(val, visited)
        )
      }
      return check(value, seen)
    } catch {
      return false
    }
  }
  
  return true
}
