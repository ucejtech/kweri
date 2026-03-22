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

export function createReactQueryHooks(useSyncExternalStore: UseSyncExternalStore) {
  function useQuery<E extends Endpoint>(
    kweri: Kweri,
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

      kweri.query(endpoint, params).catch(() => {})

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
    kweri: Kweri,
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
