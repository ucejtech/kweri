import { ValidationError } from '../types/index.js'

export type CacheEntryStatus = 'idle' | 'loading' | 'success' | 'error'

export interface CachedError {
  message: string
  type: 'network' | 'validation' | 'server' | 'unknown'
  status?: number
  retryable: boolean
}

export interface CacheEntry<T = unknown> {
  data: T | undefined
  status: CacheEntryStatus
  error: CachedError | undefined
  
  updatedAt: number
  staleTime: number
  cacheTime: number
  
  errorUpdatedAt: number
  errorCacheTime: number
  retryCount: number
}

export interface CacheEntryOptions {
  data?: unknown
  status?: CacheEntryStatus
  error?: CachedError
  staleTime?: number
  cacheTime?: number
  errorCacheTime?: number
}

export const defaultCacheOptions = {
  staleTime: 0,
  cacheTime: 5 * 60_000, // 5 minutes
  errorCacheTime: 5_000, // 5 seconds
} as const

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

export function isFresh(
  entry: CacheEntry,
  now: number = Date.now()
): boolean {
  if (entry.updatedAt === 0) return false
  return now < entry.updatedAt + entry.staleTime
}

export function isErrorExpired(
  entry: CacheEntry,
  now: number = Date.now()
): boolean {
  if (!entry.error || entry.errorUpdatedAt === 0) return true
  return now >= entry.errorUpdatedAt + entry.errorCacheTime
}

/** Categorizes errors by type and determines retry behavior */
export function categorizeError(error: unknown): CachedError {
  const message = error instanceof Error ? error.message : String(error)

  // Schema validation failures (response mismatch) are non-retryable
  if (error instanceof ValidationError) {
    return { message, type: 'validation', retryable: false }
  }

  const status = (error as any)?.status ?? (error as any)?.statusCode

  // 4xx errors are client validation issues (non-retryable)
  if (status >= 400 && status < 500) {
    return { message, type: 'validation', status, retryable: false }
  }
  
  // 5xx errors are server issues (retryable)
  if (status >= 500) {
    return { message, type: 'server', status, retryable: true }
  }
  
  // Network-related errors (retryable)
  if (
    error instanceof TypeError ||
    (error as any)?.name === 'AbortError' ||
    (error as any)?.name === 'NetworkError'
  ) {
    return { message, type: 'network', retryable: true }
  }
  
  return { message, type: 'unknown', retryable: true }
}

