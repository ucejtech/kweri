// Core API Client
export { ApiClient } from './api-client/index.js'

// Contract definition
export { defineEndpoint } from './contract/index.js'
export type { Endpoint, InferParams, InferResponse } from './contract/index.js'

// Types
export { ValidationError } from './types/index.js'
export type { HttpMethod, Fetcher, FetcherOptions } from './types/index.js'

// Re-export TypeBox for schema definition
export { Type, type Static } from '@sinclair/typebox'

// Cache utilities 
export { createCacheEntry, isFresh, isErrorExpired, categorizeError } from './cache/index.js'
export type { CacheEntry, CachedError } from './cache/cache-entry.js'
export { CacheStore } from './cache/cache-store.js'

// Query key utilities
export { normalizeQueryKey, hashQueryKey, stableSerialize } from './query-key/index.js'

// Subscriptions
export { ObserverRegistry } from './subscriptions/index.js'
export type { Callback, Unsubscribe, GlobalNotifyCallback } from './subscriptions/index.js'

// Fetch orchestration
export { FetchOrchestrator } from './fetch-orchestrator/index.js'

// Query client (invalidation, cache access)
export { QueryClient } from './query-client/index.js'

// Mutations (lifecycle hooks, optimistic updates, invalidates)
export { mutate } from './mutations/index.js'
export type { MutationOptions } from './mutations/index.js'

// Eviction / GC
export { EvictionEngine, isEligibleForEviction } from './eviction/index.js'
export type { TimerAdapter } from './eviction/index.js'

// Persistence
export type { PersistenceAdapter, SerializedCache } from './persistence/index.js'
export { CACHE_VERSION } from './persistence/index.js'

// Kweri facade (single entry point)
export { Kweri } from './kweri/index.js'
export type { KweriOptions, KweriDevToolsSnapshot } from './kweri/index.js'

// Devtools (vanilla DOM overlay)
export { mountKweriDevTools } from './devtools/index.js'
export type { MountKweriDevToolsOptions } from './devtools/index.js'

// Framework adapters (optional; pass your framework's APIs)
export { createReactQueryHooks, createReactPathHooks } from './adapters/react.js'
export type { UseSyncExternalStore, ReactQueryOptions, ReactQueryResult, ReactMutationResult } from './adapters/react.js'
export { createVueQueryHooks, createVuePathHooks } from './adapters/vue.js'
export type { VueRef, VueEffectAPI, VueQueryOptions, VueQueryResult, VueMutationResult } from './adapters/vue.js'
