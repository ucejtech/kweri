import { Type, type TSchema, type Static } from '@sinclair/typebox'
import type { HttpMethod } from '../types/index.js'

export interface Endpoint<
  TParams extends TSchema = TSchema,
  TResponse extends TSchema = TSchema
> {
  method: HttpMethod
  path: string
  params: TParams
  response: TResponse
}

export type InferParams<T extends Endpoint> = Static<T['params']>
export type InferResponse<T extends Endpoint> = Static<T['response']>

export function defineEndpoint<
  TParams extends TSchema,
  TResponse extends TSchema
>(config: Endpoint<TParams, TResponse>): Endpoint<TParams, TResponse> {
  return config
}
