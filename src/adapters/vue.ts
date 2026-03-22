import type { Endpoint, InferParams, InferResponse } from '../contract/index.js'
import type { Kweri } from '../kweri/index.js'
import type { CacheEntryStatus } from '../cache/cache-entry.js'

export interface Ref<T> {
  value: T;
}

export interface VueEffectAPI {
  ref<T>(value: T): Ref<T>;
  watch<T>(source: T | (() => T) | Ref<T>, cb: (value: T, oldValue?: T) => void, options?: { immediate?: boolean }): () => void;
  onUnmounted(cb: () => void): void;
}

export interface VueQueryOptions {
  enabled?: Ref<boolean> | boolean;
}

export interface VueQueryResult<TData = unknown, TError = unknown> {
  data: Ref<TData | undefined>;
  status: Ref<CacheEntryStatus>;
  error: Ref<TError | undefined>;
  refetch: () => Promise<void>;
  isLoading: Ref<boolean>;
  isSuccess: Ref<boolean>;
  isError: Ref<boolean>;
}

export interface VueMutationResult<TData = unknown, TError = unknown> {
  mutate: (vars?: unknown) => void;
  mutateAsync: (vars?: unknown) => Promise<TData>;
  status: Ref<CacheEntryStatus>;
  error: Ref<TError | undefined>;
  reset: () => void;
  isLoading: Ref<boolean>;
  isSuccess: Ref<boolean>;
  isError: Ref<boolean>;
}

export function createVueQueryHooks(vue: VueEffectAPI) {
  function useQuery<E extends Endpoint>(
    kweri: Kweri,
    endpoint: E,
    params: InferParams<E> | Ref<InferParams<E>>,
    options: VueQueryOptions = {}
  ): VueQueryResult<InferResponse<E>, Error> {
    type TData = InferResponse<E>;

    const data = vue.ref<TData | undefined>(undefined);
    const status = vue.ref<CacheEntryStatus>('idle');
    const error = vue.ref<Error | undefined>(undefined);
    const isLoading = vue.ref(false);
    const isSuccess = vue.ref(false);
    const isError = vue.ref(false);

    let unsubscribe: (() => void) | undefined;

    const enabled = typeof options.enabled === 'object' ? options.enabled : vue.ref(options.enabled ?? true);

    const executeQuery = async (currentParams: InferParams<E>) => {
      if (!enabled.value) {
        status.value = 'idle';
        return;
      }

      data.value = kweri.getCachedData(endpoint, currentParams) as TData | undefined;
      
      unsubscribe?.();
      unsubscribe = kweri.subscribe(endpoint, currentParams, (entry) => {
        data.value = entry.data as TData | undefined;
        status.value = entry.status;
        error.value = entry.error as Error | undefined;
        isLoading.value = entry.status === 'loading';
        isSuccess.value = entry.status === 'success';
        isError.value = entry.status === 'error';
      });

      kweri.query(endpoint, currentParams).catch(() => {});
    };

    const getCurrentParams = () => {
      return typeof params === 'object' && params !== null && 'value' in params ? params.value : params;
    };

    // Watch reactive params
    if (typeof params === 'object' && params !== null && 'value' in params) {
      vue.watch(params, (newParams) => {
        executeQuery(newParams);
      }, { immediate: true });
    } else {
      executeQuery(params as InferParams<E>);
    }

    // Watch enabled option
    vue.watch(enabled, (newEnabled) => {
      if (newEnabled) {
        executeQuery(getCurrentParams());
      } else {
        unsubscribe?.();
        status.value = 'idle';
        isLoading.value = false;
        isSuccess.value = false;
        isError.value = false;
      }
    }, { immediate: true });

    vue.onUnmounted(() => {
      unsubscribe?.();
    });

    const refetch = async () => {
      const currentParams = getCurrentParams();
      kweri.invalidateQuery(endpoint, currentParams);
      await kweri.query(endpoint, currentParams);
    };

    return {
      data,
      status,
      error,
      refetch,
      isLoading,
      isSuccess,
      isError,
    };
  }

  function useMutation<E extends Endpoint>(
    kweri: Kweri,
    endpoint: E
  ): VueMutationResult<InferResponse<E>, Error> {
    type TData = InferResponse<E>;

    const status = vue.ref<CacheEntryStatus>('idle');
    const error = vue.ref<Error | undefined>(undefined);
    const isLoading = vue.ref(false);
    const isSuccess = vue.ref(false);
    const isError = vue.ref(false);

    const mutate = (vars?: InferParams<E>) => {
      mutateAsync(vars).catch(() => {});
    };

    const mutateAsync = async (vars?: InferParams<E>): Promise<TData> => {
      status.value = 'loading';
      error.value = undefined;
      isLoading.value = true;
      isSuccess.value = false;
      isError.value = false;

      try {
        const result = await kweri.mutate(endpoint, vars as InferParams<E>);
        status.value = 'success';
        isLoading.value = false;
        isSuccess.value = true;
        return result as TData;
      } catch (err) {
        status.value = 'error';
        error.value = err as Error;
        isLoading.value = false;
        isError.value = true;
        throw err;
      }
    };

    const reset = () => {
      status.value = 'idle';
      error.value = undefined;
      isLoading.value = false;
      isSuccess.value = false;
      isError.value = false;
    };

    return {
      mutate,
      mutateAsync,
      status,
      error,
      reset,
      isLoading,
      isSuccess,
      isError,
    };
  }

  return { useQuery, useMutation };
}