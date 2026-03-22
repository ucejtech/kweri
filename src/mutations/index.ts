import type { Endpoint } from '../contract/index.js'
import type { QueryClient } from '../query-client/index.js'
import type { ApiClient } from '../api-client/index.js'

export interface MutationOptions<TParams = unknown, TResponse = unknown, TContext = unknown> {
  onMutate?: (params: TParams) => TContext | Promise<TContext>
  onSuccess?: (data: TResponse, params: TParams, context: TContext) => void
  onError?: (error: Error, params: TParams, context: TContext) => void
  onSettled?: (
    data: TResponse | undefined,
    error: Error | undefined,
    params: TParams,
    context: TContext
  ) => void
  /** Endpoints to invalidate (with empty params) after success */
  invalidates?: Endpoint[]
}

/**
 * Runs a mutation: onMutate → execute → onSuccess + invalidate, or onError; always onSettled.
 * Context from onMutate is passed to onSuccess, onError, onSettled for rollback/cleanup.
 */
export async function mutate<
  E extends Endpoint,
  TParams = unknown,
  TResponse = unknown,
  TContext = unknown
>(
  queryClient: QueryClient,
  apiClient: ApiClient,
  endpoint: E,
  params: TParams,
  options: MutationOptions<TParams, TResponse, TContext> = {}
): Promise<TResponse> {
  const { onMutate, onSuccess, onError, onSettled, invalidates } = options

  const context = onMutate
    ? await Promise.resolve(onMutate(params))
    : (undefined as TContext)

  let data: TResponse | undefined
  let error: Error | undefined

  try {
    const flatParams = (params as Record<string, unknown>) ?? {}
    const response = await apiClient.execute(endpoint, flatParams as Record<string, any>)
    data = response as TResponse
    onSuccess?.(data, params, context)
    if (invalidates?.length) {
      for (const ep of invalidates) {
        queryClient.invalidateQuery(ep, {})
      }
    }
    return data
  } catch (e) {
    error = e instanceof Error ? e : new Error(String(e))
    onError?.(error, params, context)
    throw error
  } finally {
    onSettled?.(data, error, params, context)
  }
}
