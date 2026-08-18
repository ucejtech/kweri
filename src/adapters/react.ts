import { Type } from '@sinclair/typebox'
import type { Endpoint, InferParams, InferResponse } from '../contract/index.js'
import type { Kweri, QueryOptions } from '../kweri/index.js'
import type { CacheEntryStatus } from '../cache/cache-entry.js'

export interface UseSyncExternalStore {
  <Snapshot>(
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => Snapshot
  ): Snapshot;
}

export interface UseRef {
  <T>(initialValue: T): { current: T };
}

/**
 * React primitives handed to the adapter so this package never imports react.
 *
 * Passing the bare `useSyncExternalStore` function is still supported. `useRef`
 * is only used by `useMutation`: with it each hook call owns its mutation state,
 * without it components calling the same endpoint share one status.
 */
export interface ReactHooks {
  useSyncExternalStore: UseSyncExternalStore;
  useRef?: UseRef;
}

export interface ReactQueryOptions {
  enabled?: boolean;
  staleTime?: number;
  cacheTime?: number;
  maxRetries?: number;
}

export interface ReactQueryResult<TData = unknown, TError = unknown> {
  data: TData | undefined;
  status: CacheEntryStatus;
  error: TError | undefined;
  refetch: () => Promise<void>;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface ReactMutationResult<TData = unknown, TError = unknown> {
  mutate: (vars?: unknown) => void;
  mutateAsync: (vars?: unknown) => Promise<TData>;
  status: CacheEntryStatus;
  error: TError | undefined;
  reset: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface QuerySnapshot {
  data: unknown;
  status: CacheEntryStatus;
  error: Error | undefined;
}

interface QueryBinding {
  refs: number;
  snapshot: QuerySnapshot;
  subscribe: (onStoreChange: () => void) => () => void;
  getSnapshot: () => QuerySnapshot;
  refetch: () => Promise<void>;
}

interface MutationSnapshot {
  status: CacheEntryStatus;
  error: Error | undefined;
}

interface MutationStore {
  refs: number;
  snapshot: MutationSnapshot;
  subscribe: (onStoreChange: () => void) => () => void;
  getSnapshot: () => MutationSnapshot;
  set: (next: MutationSnapshot) => void;
}

/**
 * Runs `release` after the current task so React StrictMode's synchronous
 * unsubscribe/resubscribe doesn't drop a binding a mounted component still uses.
 */
function deferRelease(release: () => void): void {
  if (typeof queueMicrotask === 'function') queueMicrotask(release)
  else release()
}

function sameSnapshot(a: QuerySnapshot, b: QuerySnapshot): boolean {
  return a.data === b.data && a.status === b.status && a.error === b.error
}

function createMutationStore(onEmpty?: () => void): MutationStore {
  const listeners = new Set<() => void>()

  const store: MutationStore = {
    refs: 0,
    snapshot: { status: 'idle', error: undefined },
    getSnapshot: () => store.snapshot,
    subscribe: (onStoreChange) => {
      store.refs++
      listeners.add(onStoreChange)
      return () => {
        store.refs--
        listeners.delete(onStoreChange)
        if (store.refs === 0 && onEmpty) deferRelease(onEmpty)
      }
    },
    set: (next) => {
      store.snapshot = next
      for (const listener of listeners) listener()
    },
  }

  return store
}

/**
 * @param react - React's `useSyncExternalStore`, or `{ useSyncExternalStore, useRef }`
 * @param kweri - Kweri instance
 */
export function createReactQueryHooks(
  react: UseSyncExternalStore | ReactHooks,
  kweri: Kweri
) {
  const useSyncExternalStore =
    typeof react === 'function' ? react : react.useSyncExternalStore
  const useRef = typeof react === 'function' ? undefined : react.useRef

  // `useSyncExternalStore` compares snapshots with Object.is and re-subscribes
  // whenever `subscribe` changes identity, so both must survive across renders.
  // Bindings are keyed by serialized query key + the options that shape the
  // fetch, which is exactly when a hook call should re-subscribe.
  const queryBindings = new Map<string, QueryBinding>()
  const sharedMutations = new Map<string, MutationStore>()

  function createQueryBinding(
    bindingKey: string,
    endpoint: Endpoint,
    params: any,
    queryOpts: QueryOptions,
    enabled: boolean
  ): QueryBinding {
    const readCached = () => kweri.getCachedData(endpoint, params)
    const cached = readCached()

    const binding: QueryBinding = {
      refs: 0,
      snapshot: {
        data: cached,
        status: cached !== undefined ? 'success' : 'idle',
        error: undefined,
      },
      getSnapshot: () => binding.snapshot,

      subscribe: (onStoreChange) => {
        binding.refs++

        let unsubscribe: () => void = () => {}

        if (enabled) {
          unsubscribe = kweri.subscribe(endpoint, params, (entry) => {
            const next: QuerySnapshot = {
              data: entry.data,
              status: entry.status,
              error: entry.error as Error | undefined,
            }
            if (!sameSnapshot(binding.snapshot, next)) binding.snapshot = next
            onStoreChange()
          })

          // The cache can gain a fresh entry between the render that created
          // this binding and this commit; a fresh `query()` returns early
          // without notifying, so pick it up here.
          if (binding.snapshot.status === 'idle') {
            const data = readCached()
            if (data !== undefined) {
              binding.snapshot = { data, status: 'success', error: undefined }
            }
          }

          kweri.query(endpoint, params, queryOpts).catch((err) => {
            if (typeof console !== 'undefined') {
              console.error('[kweri] background query failed:', err)
            }
          })
        }

        return () => {
          binding.refs--
          unsubscribe()
          if (binding.refs > 0) return
          deferRelease(() => {
            if (binding.refs === 0 && queryBindings.get(bindingKey) === binding) {
              queryBindings.delete(bindingKey)
            }
          })
        }
      },

      refetch: async () => {
        kweri.invalidateQuery(endpoint, params)
        await kweri.query(endpoint, params, queryOpts)
      },
    }

    return binding
  }

  function useQuery<E extends Endpoint>(
    endpoint: E,
    params: InferParams<E>,
    options: ReactQueryOptions = {}
  ): ReactQueryResult<InferResponse<E>, Error> {
    const enabled = options.enabled ?? true
    const queryOpts: QueryOptions = {
      staleTime: options.staleTime,
      cacheTime: options.cacheTime,
      maxRetries: options.maxRetries,
    }

    const bindingKey = [
      kweri.getQueryKey(endpoint, params),
      enabled,
      queryOpts.staleTime,
      queryOpts.cacheTime,
      queryOpts.maxRetries,
    ].join('|')

    let binding = queryBindings.get(bindingKey)
    if (!binding) {
      binding = createQueryBinding(bindingKey, endpoint, params, queryOpts, enabled)
      queryBindings.set(bindingKey, binding)
    }

    const state = useSyncExternalStore(binding.subscribe, binding.getSnapshot)

    return {
      data: state.data as InferResponse<E> | undefined,
      status: state.status,
      error: state.error,
      refetch: binding.refetch,
      isFetching: kweri.isInFlight(endpoint, params),
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
    }
  }

  function getSharedMutationStore(key: string): MutationStore {
    const existing = sharedMutations.get(key)
    if (existing) return existing

    const store: MutationStore = createMutationStore(() => {
      if (store.refs === 0 && sharedMutations.get(key) === store) {
        sharedMutations.delete(key)
      }
    })
    sharedMutations.set(key, store)
    return store
  }

  function useMutation<E extends Endpoint>(
    endpoint: E
  ): ReactMutationResult<InferResponse<E>, Error> {
    type TData = InferResponse<E>;

    // `useRef` comes from the factory, so this branch is fixed for the lifetime
    // of the hooks and never reorders hook calls between renders.
    const storeRef = useRef ? useRef<MutationStore | null>(null) : undefined
    let store: MutationStore
    if (storeRef) {
      if (storeRef.current === null) storeRef.current = createMutationStore()
      store = storeRef.current
    } else {
      store = getSharedMutationStore(`${endpoint.method} ${endpoint.path}`)
    }

    const state = useSyncExternalStore(store.subscribe, store.getSnapshot)

    const mutateAsync = async (vars?: InferParams<E>): Promise<TData> => {
      store.set({ status: 'loading', error: undefined })
      try {
        const result = await kweri.mutate(endpoint, vars as InferParams<E>)
        store.set({ status: 'success', error: undefined })
        return result as TData
      } catch (error) {
        store.set({ status: 'error', error: error as Error })
        throw error
      }
    }

    const mutate = (vars?: InferParams<E>) => {
      mutateAsync(vars).catch(() => {})
    }

    const reset = () => {
      store.set({ status: 'idle', error: undefined })
    }

    return {
      mutate,
      mutateAsync,
      status: state.status,
      error: state.error,
      reset,
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
    }
  }

  return { useQuery, useMutation }
}

// ---------------------------------------------------------------------------
// Type helpers for path-based hooks
// ---------------------------------------------------------------------------

/** All valid paths for a given method in the EndpointByMethod map. */
type PathsOf<TMap, TMethod extends string> =
  TMethod extends keyof TMap ? keyof TMap[TMethod] & string : string

/** The raw TypeBox schema object for a specific method + path. */
type SchemaOf<TMap, TMethod extends string, TPath extends string> =
  TMethod extends keyof TMap
    ? TPath extends keyof TMap[TMethod]
      ? TMap[TMethod][TPath]
      : never
    : never

/**
 * Extract the `parameters` type from a TypeBox endpoint schema.
 * TypeBox stores the TypeScript type as a phantom `static` property,
 * so we read it directly to avoid calling `Static<>` on a generic.
 */
type EndpointParams<TSchema> =
  TSchema extends { readonly static: { parameters: infer P } } ? P : Record<string, unknown>

/**
 * Extract the success response type (200 → 201 → unknown fallback)
 * from a TypeBox endpoint schema.
 */
type EndpointResponse<TSchema> =
  TSchema extends { readonly static: { responses: { 200: infer R } } } ? R :
  TSchema extends { readonly static: { responses: { 201: infer R } } } ? R : unknown

// ---------------------------------------------------------------------------

/**
 * Create path-based hooks bound to a kweri instance and a generated EndpointByMethod map.
 * Usage mirrors the rise-api pattern: useGet('/users', {}) instead of useQuery(kweri, endpoint, {}).
 *
 * @param react            - React's `useSyncExternalStore`, or `{ useSyncExternalStore, useRef }`
 * @param kweri            - Kweri instance
 * @param endpointByMethod - EndpointByMethod from the generated contract (kweri/generated)
 */
export function createReactPathHooks<
  TMap extends Record<string, Record<string, any>>
>(
  react: UseSyncExternalStore | ReactHooks,
  kweri: Kweri,
  endpointByMethod: TMap
) {
  const { useQuery, useMutation } = createReactQueryHooks(react, kweri)

  // Endpoints are rebuilt per call, so they must be value-stable: cache keys and
  // binding keys derive from method + path + params, never from object identity.
  function resolveEndpoint(method: string, path: string): Endpoint {
    // EndpointByMethod uses lowercase keys ('get', 'post', …)
    const key = method.toLowerCase()
    if (!endpointByMethod[key]?.[path]) {
      throw new Error(`[kweri] No endpoint registered for ${method} ${path}`)
    }
    // Use Type.Unknown() so kweri skips runtime validation for path-based hooks.
    // The response schema from typed-openapi is used for TypeScript inference only —
    // runtime validation against it is too strict for real-world JSON payloads.
    return { method: method as Endpoint['method'], path, params: Type.Any(), response: Type.Unknown() }
  }

  function useGet<TPath extends PathsOf<TMap, 'get'>>(
    path: TPath,
    params: EndpointParams<SchemaOf<TMap, 'get', TPath>> = {} as any,
    options: ReactQueryOptions = {}
  ): ReactQueryResult<EndpointResponse<SchemaOf<TMap, 'get', TPath>>, Error> {
    return useQuery(resolveEndpoint('GET', path), params as any, options) as any
  }

  function usePost<TPath extends PathsOf<TMap, 'post'>>(
    path: TPath
  ): ReactMutationResult<EndpointResponse<SchemaOf<TMap, 'post', TPath>>, Error> {
    return useMutation(resolveEndpoint('POST', path)) as any
  }

  function usePut<TPath extends PathsOf<TMap, 'put'>>(
    path: TPath
  ): ReactMutationResult<EndpointResponse<SchemaOf<TMap, 'put', TPath>>, Error> {
    return useMutation(resolveEndpoint('PUT', path)) as any
  }

  function usePatch<TPath extends PathsOf<TMap, 'patch'>>(
    path: TPath
  ): ReactMutationResult<EndpointResponse<SchemaOf<TMap, 'patch', TPath>>, Error> {
    return useMutation(resolveEndpoint('PATCH', path)) as any
  }

  function useDelete<TPath extends PathsOf<TMap, 'delete'>>(
    path: TPath
  ): ReactMutationResult<EndpointResponse<SchemaOf<TMap, 'delete', TPath>>, Error> {
    return useMutation(resolveEndpoint('DELETE', path)) as any
  }

  return { useGet, usePost, usePut, usePatch, useDelete }
}
