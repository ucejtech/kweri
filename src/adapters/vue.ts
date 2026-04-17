import { Type } from '@sinclair/typebox'
import type { Ref } from 'vue'
import type { Endpoint, InferParams, InferResponse } from '../contract/index.js'
import type { Kweri } from '../kweri/index.js'
import type { CacheEntryStatus } from '../cache/cache-entry.js'

// Internal structural interface for accepting Vue's reactive primitives
// without a hard runtime dependency on vue
export interface VueRef<T> {
  value: T;
}

export interface VueEffectAPI {
  ref<T>(value: T): VueRef<T>;
  watch<T>(source: T | (() => T) | VueRef<T>, cb: (value: T, oldValue?: T) => void, options?: { immediate?: boolean }): () => void;
  onUnmounted(cb: () => void): void;
}

export interface VueQueryOptions {
  enabled?: VueRef<boolean> | boolean;
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

export function createVueQueryHooks(vue: VueEffectAPI, kweri: Kweri) {
  function useQuery<E extends Endpoint>(
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

      kweri.query(endpoint, currentParams).catch((err) => {
        if (typeof console !== 'undefined') {
          console.error('[kweri] background query failed:', err)
        }
      });
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
    } as unknown as VueQueryResult<InferResponse<E>, Error>;
  }

  function useMutation<E extends Endpoint>(
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
    } as unknown as VueMutationResult<InferResponse<E>, Error>;
  }

  return { useQuery, useMutation };
}

// ---------------------------------------------------------------------------
// Type helpers for path-based hooks (shared with react adapter)
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
 * @param vue   - Vue effect API (ref, watch, onUnmounted)
 * @param kweri - Kweri instance
 * @param endpointByMethod - EndpointByMethod from the generated contract (kweri/generated)
 */
export function createVuePathHooks<
  TMap extends Record<string, Record<string, any>>
>(
  vue: VueEffectAPI,
  kweri: Kweri,
  endpointByMethod: TMap
) {
  const { useQuery, useMutation } = createVueQueryHooks(vue, kweri)

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
    options: VueQueryOptions = {}
  ): VueQueryResult<EndpointResponse<SchemaOf<TMap, 'get', TPath>>, Error> {
    return useQuery(resolveEndpoint('GET', path), params as any, options) as any
  }

  function usePost<TPath extends PathsOf<TMap, 'post'>>(
    path: TPath
  ): VueMutationResult<EndpointResponse<SchemaOf<TMap, 'post', TPath>>, Error> {
    return useMutation(resolveEndpoint('POST', path)) as any
  }

  function usePut<TPath extends PathsOf<TMap, 'put'>>(
    path: TPath
  ): VueMutationResult<EndpointResponse<SchemaOf<TMap, 'put', TPath>>, Error> {
    return useMutation(resolveEndpoint('PUT', path)) as any
  }

  function usePatch<TPath extends PathsOf<TMap, 'patch'>>(
    path: TPath
  ): VueMutationResult<EndpointResponse<SchemaOf<TMap, 'patch', TPath>>, Error> {
    return useMutation(resolveEndpoint('PATCH', path)) as any
  }

  function useDelete<TPath extends PathsOf<TMap, 'delete'>>(
    path: TPath
  ): VueMutationResult<EndpointResponse<SchemaOf<TMap, 'delete', TPath>>, Error> {
    return useMutation(resolveEndpoint('DELETE', path)) as any
  }

  return { useGet, usePost, usePut, usePatch, useDelete }
}