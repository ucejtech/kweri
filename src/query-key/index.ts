export type QueryKey = readonly [method: string, path: string, params: unknown]

export type NormalizedKey = readonly [method: string, path: string, serializedParams: string]

const isDevelopment = typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production'

export interface QueryKeyOptions {
  hashThreshold?: number
  dropUndefinedKeys?: boolean
}

const defaultOptions: Required<QueryKeyOptions> = {
  hashThreshold: 1024,
  dropUndefinedKeys: true,
}

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

// Serializes with stable key ordering so {a:1,b:2} === {b:2,a:1}
export function stableSerialize(
  value: unknown,
  options: QueryKeyOptions = {}
): string {
  const opts = { ...defaultOptions, ...options }
  
  if (typeof value === 'function') {
    throw new Error('Cannot serialize function in query key')
  }
  
  if (typeof value === 'symbol') {
    throw new Error('Cannot serialize symbol in query key')
  }
  
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  
  if (typeof value !== 'object') {
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
  
  // Sort object keys alphabetically
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

export function serializeQueryKey(
  key: QueryKey,
  options: QueryKeyOptions = {}
): string {
  const normalized = normalizeQueryKey(key, options)
  const [method, path, serializedParams] = normalized
  return `${method}:${path}:${serializedParams}`
}

export async function hashQueryKey(serializedKey: string): Promise<{
  hash: string
  original: string
}> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder()
    const data = encoder.encode(serializedKey)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return { hash: hashHex, original: serializedKey }
  }
  
  // Fallback hash for environments without crypto.subtle
  let hash = 0
  for (let i = 0; i < serializedKey.length; i++) {
    const char = serializedKey.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  const hashHex = Math.abs(hash).toString(16)
  return { hash: hashHex, original: serializedKey }
}

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

export function createQueryKey(
  method: string,
  path: string,
  params: unknown
): QueryKey {
  return [method, path, params] as const
}

// Dev mode validation - checks for functions, symbols, and circular refs
export function isValidQueryKeyValue(value: unknown): boolean {
  if (!isDevelopment) return true
  
  if (value === null || value === undefined) return true
  if (typeof value === 'function') return false
  if (typeof value === 'symbol') return false
  
  if (typeof value === 'object') {
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
