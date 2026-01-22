/**
 * Status of a cache entry indicating its current state in the fetch lifecycle.
 */
export type CacheEntryStatus = 'idle' | 'loading' | 'success' | 'error'

/**
 * Categorized error information for cache entries.
 */
export interface CachedError {
  /** Human-readable error message */
  message: string

  /** Error category for determining retry behavior */
  type: 'network' | 'validation' | 'server' | 'unknown'
  
  /** HTTP status code if available */
  status?: number
  
  /** Whether this error is retryable */
  retryable: boolean
}

/**
 * Cache entry containing query result data and metadata.
 * 
 * @template T - Type of the cached data
 */
export interface CacheEntry<T = unknown> {
  /** Cached data value (undefined until first successful fetch) */
  data: T | undefined
  
  /** Current status in the fetch lifecycle */
  status: CacheEntryStatus
  
  /** Error information if status is 'error' */
  error: CachedError | undefined
  
  /** Timestamp (ms) of last successful data fetch */
  updatedAt: number
  
  /** Duration (ms) before data is considered stale */
  staleTime: number
  
  /** Duration (ms) before entry is removed from cache */
  cacheTime: number
  
  /** Timestamp (ms) when error was last cached */
  errorUpdatedAt: number
  
  /** Duration (ms) before error cache expires */
  errorCacheTime: number
  
  /** Number of retry attempts made for this entry */
  retryCount: number
}


export interface CacheEntryOptions {
  /** Initial data value */
  data?: unknown

  status?: CacheEntryStatus
  
  error?: CachedError
  
  /** Duration (ms) before data is considered stale */
  staleTime?: number
  
  /** Duration (ms) before entry is eligible for GC */
  cacheTime?: number
  
  /** Duration (ms) before error cache expires */
  errorCacheTime?: number
}

/**
 * Default cache entry configuration.
 */
export const defaultCacheOptions = {
  staleTime: 0,
  cacheTime: 5 * 60_000,
  errorCacheTime: 5_000,
} as const

/**
 * Creates a new cache entry with default values.
 * 
 * @param options - Partial cache entry options
 * @returns New cache entry with defaults applied
 */
export function createCacheEntry<T = unknown>(
  options: CacheEntryOptions = {}
): CacheEntry<T> {
  const now = Date.now()
  
  return {
    data: options.data as T | undefined,
    status: options.status ?? 'idle',
    error: options.error,
    updatedAt: options.data !== undefined ? now : 0,
    staleTime: options.staleTime ?? defaultCacheOptions.staleTime,
    cacheTime: options.cacheTime ?? defaultCacheOptions.cacheTime,
    errorUpdatedAt: options.error ? now : 0,
    errorCacheTime: options.errorCacheTime ?? defaultCacheOptions.errorCacheTime,
    retryCount: 0,
  }
}

/**
 * Checks if a cache entry's data is fresh (within staleTime window).
 * 
 * @param entry - Cache entry to check
 * @param now - Current timestamp (defaults to Date.now())
 * @returns true if data is fresh, false if stale
 */
export function isFresh(
  entry: CacheEntry,
  now: number = Date.now()
): boolean {
  if (entry.updatedAt === 0) return false
  return now < entry.updatedAt + entry.staleTime
}

/**
 * Checks if a cache entry's error has expired.
 * 
 * @param entry - Cache entry to check
 * @param now - Current timestamp (defaults to Date.now())
 * @returns true if error has expired or no error exists, false if error is still cached
 */
export function isErrorExpired(
  entry: CacheEntry,
  now: number = Date.now()
): boolean {
  if (!entry.error || entry.errorUpdatedAt === 0) return true
  return now >= entry.errorUpdatedAt + entry.errorCacheTime
}

/**
 * Categorizes an error into a CachedError with appropriate retry behavior.
 * 
 * @param error - Error to categorize (can be Error, unknown, or object with status)
 * @returns Categorized error with type and retry information
 */
export function categorizeError(error: unknown): CachedError {
  const message = error instanceof Error ? error.message : String(error)
  
  const status = (error as any)?.status ?? (error as any)?.statusCode
  
  if (status !== undefined) {
    if (status >= 400 && status < 500) {
      return {
        message,
        type: 'validation',
        status,
        retryable: false,
      }
    }
    
    if (status >= 500) {
      return {
        message,
        type: 'server',
        status,
        retryable: true,
      }
    }
  }
  
  if (
    error instanceof TypeError ||
    (error as any)?.name === 'AbortError' ||
    (error as any)?.name === 'NetworkError'
  ) {
    return {
      message,
      type: 'network',
      retryable: true,
    }
  }
  
  return {
    message,
    type: 'unknown',
    retryable: true,
  }
}

