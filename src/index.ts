// Core API Client
export { ApiClient } from './api-client/index.js'

// Contract definition
export { defineEndpoint } from './contract.js'
export type { Endpoint, InferParams, InferResponse } from './contract.js'

// Types
export { ValidationError } from './types.js'
export type { HttpMethod, Fetcher, FetcherOptions } from './types.js'

// Re-export TypeBox for schema definition
export { Type, type Static } from '@sinclair/typebox'

// Cache utilities 
export { createCacheEntry, isFresh, isErrorExpired, categorizeError } from './cache/index.js'
export type { CacheEntry, CachedError } from './cache/cache-entry.js'
export { CacheStore } from './cache/cache-store.js'

// Query key utilities
export { normalizeQueryKey, hashQueryKey, stableSerialize } from './query-key/index.js'

// Subscriptions
export { ObserverRegistry } from './subscriptions.js'
export type { Callback, Unsubscribe } from './subscriptions.js'

// Fetch orchestration
export { FetchOrchestrator } from './fetch-orchestrator.js'

// Generated client (available after running kweri-gen)
export { createClient, GeneratedClient } from '../.generated/client.js'
