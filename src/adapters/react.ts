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

/**
 * Create path-based hooks bound to a kweri instance and a generated EndpointByMethod map.
 * Usage mirrors the rise-api pattern: useGet('/users', {}) instead of useQuery(kweri, endpoint, {}).
 *
 * @param useSyncExternalStore - React's useSyncExternalStore
 * @param kweri                - Kweri instance
 * @param endpointByMethod     - EndpointByMethod from the generated contract (kweri/generated)
 */
export function createReactPathHooks(
  useSyncExternalStore: UseSyncExternalStore,
  kweri: Kweri,
  endpointByMethod: Record<string, Record<string, any>>
) {
  const { useQuery, useMutation } = createReactQueryHooks(useSyncExternalStore, kweri)

  function resolveEndpoint(method: string, path: string): Endpoint {
    // EndpointByMethod uses lowercase keys ('get', 'post', …)
    const schema = endpointByMethod[method.toLowerCase()]?.[path]
    if (!schema) throw new Error(`[kweri] No endpoint registered for ${method} ${path}`)
    const responsesProps = schema.properties?.responses?.properties
    const response =
      responsesProps?.['200'] ??
      responsesProps?.['201'] ??
      schema.properties?.response ??
      Type.Unknown()
    return { method: method as Endpoint['method'], path, params: Type.Any(), response }
  }

  function useGet(path: string, params: any = {}, options: ReactQueryOptions = {}) {
    return useQuery(resolveEndpoint('GET', path), params, options)
  }

  function usePost(path: string) {
    return useMutation(resolveEndpoint('POST', path))
  }

  function usePut(path: string) {
    return useMutation(resolveEndpoint('PUT', path))
  }

  function usePatch(path: string) {
    return useMutation(resolveEndpoint('PATCH', path))
  }

  function useDelete(path: string) {
    return useMutation(resolveEndpoint('DELETE', path))
  }

  return { useGet, usePost, usePut, usePatch, useDelete }
}
