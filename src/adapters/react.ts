import { Type } from '@sinclair/typebox'
import type { Endpoint, InferParams, InferResponse } from '../contract/index.js'
import type { Kweri } from '../kweri/index.js'
import type { CacheEntryStatus } from '../cache/cache-entry.js'

export interface UseSyncExternalStore {
  <Snapshot>(
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => Snapshot
  ): Snapshot;
}

export interface ReactQueryOptions {
  enabled?: boolean;
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

export function createReactQueryHooks(useSyncExternalStore: UseSyncExternalStore, kweri: Kweri) {
  function useQuery<E extends Endpoint>(
    endpoint: E,
    params: InferParams<E>,
    options: ReactQueryOptions = {}
  ): ReactQueryResult<InferResponse<E>, Error> {
    const enabled = options.enabled ?? true;

    type TData = InferResponse<E>;
    type Snapshot = {
      data: TData | undefined;
      status: CacheEntryStatus;
      error: Error | undefined;
    };

    let snapshot: Snapshot = {
      data: kweri.getCachedData(endpoint, params),
      status: 'idle',
      error: undefined,
    };

    const getSnapshot = () => snapshot;

    const subscribe = (onStoreChange: () => void) => {
      if (!enabled) {
        return () => {};
      }

      const unsubscribe = kweri.subscribe(endpoint, params, (entry) => {
        snapshot = {
          data: entry.data as TData | undefined,
          status: entry.status,
          error: entry.error as Error | undefined,
        };
        onStoreChange();
      });

      kweri.query(endpoint, params).catch((err) => {
        if (typeof console !== 'undefined') {
          console.error('[kweri] background query failed:', err)
        }
      })

      return unsubscribe;
    };

    const state = useSyncExternalStore(subscribe, getSnapshot);

    const refetch = async () => {
      kweri.invalidateQuery(endpoint, params)
      await kweri.query(endpoint, params)
    };

    return {
      data: state.data,
      status: state.status,
      error: state.error,
      refetch,
      isFetching: kweri.isInFlight(endpoint, params),
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
    };
  }

  function useMutation<E extends Endpoint>(
    endpoint: E
  ): ReactMutationResult<InferResponse<E>, Error> {
    type TData = InferResponse<E>;
    type Snapshot = {
      status: CacheEntryStatus;
      error: Error | undefined;
    };

    let snapshot: Snapshot = {
      status: 'idle',
      error: undefined,
    };

    const getSnapshot = () => snapshot;

    const subscribe = (onStoreChange: () => void) => {
      return () => {}; // Mutations don't need subscriptions
    };

    const state = useSyncExternalStore(subscribe, getSnapshot);

    const mutate = (vars?: InferParams<E>) => {
      mutateAsync(vars).catch(() => {});
    };

    const mutateAsync = async (vars?: InferParams<E>): Promise<TData> => {
      snapshot = { status: 'loading', error: undefined };
      try {
        const result = await kweri.mutate(endpoint, vars as InferParams<E>);
        snapshot = { status: 'success', error: undefined };
        return result as TData;
      } catch (error) {
        snapshot = { status: 'error', error: error as Error };
        throw error;
      }
    };

    const reset = () => {
      snapshot = { status: 'idle', error: undefined };
    };

    return {
      mutate,
      mutateAsync,
      status: state.status,
      error: state.error,
      reset,
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
    };
  }

  return { useQuery, useMutation };
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
 * @param useSyncExternalStore - React's useSyncExternalStore
 * @param kweri                - Kweri instance
 * @param endpointByMethod     - EndpointByMethod from the generated contract (kweri/generated)
 */
export function createReactPathHooks<
  TMap extends Record<string, Record<string, any>>
>(
  useSyncExternalStore: UseSyncExternalStore,
  kweri: Kweri,
  endpointByMethod: TMap
) {
  const { useQuery, useMutation } = createReactQueryHooks(useSyncExternalStore, kweri)

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
