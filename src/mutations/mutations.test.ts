import { describe, it, expect, beforeEach } from 'bun:test'
import { Type } from '@sinclair/typebox'
import { mutate } from './index.js'
import { QueryClient } from '../query-client/index.js'
import { CacheStore } from '../cache/cache-store.js'
import { ObserverRegistry } from '../subscriptions/index.js'
import { ApiClient } from '../api-client/index.js'
import { defineEndpoint } from '../contract/index.js'

const postUserEndpoint = defineEndpoint({
  method: 'POST',
  path: '/users',
  params: Type.Any(),
  response: Type.Any(),
})

const getUsersEndpoint = defineEndpoint({
  method: 'GET',
  path: '/users',
  params: Type.Any(),
  response: Type.Any(),
})

describe('mutate', () => {
  let store: CacheStore
  let observers: ObserverRegistry
  let queryClient: QueryClient
  let apiClient: ApiClient

  beforeEach(() => {
    store = new CacheStore()
    observers = new ObserverRegistry()
    queryClient = new QueryClient(store, observers)
    apiClient = new ApiClient('https://api.test', async (opts) => {
      return new Response(JSON.stringify({ id: 1, name: 'Alice' }))
    })
  })

  it('runs onMutate then execute then onSuccess then onSettled', async () => {
    const order: string[] = []
    const context = { optimistic: true }

    await mutate(
      queryClient,
      apiClient,
      postUserEndpoint,
      { body: { name: 'Alice' } },
      {
        onMutate: () => {
          order.push('onMutate')
          return context
        },
        onSuccess: (_data, _params, ctx) => {
          order.push('onSuccess')
          expect(ctx).toEqual(context)
        },
        onSettled: (_data, err, _params, ctx) => {
          order.push('onSettled')
          expect(err).toBeUndefined()
          expect(ctx).toEqual(context)
        },
      }
    )

    expect(order).toEqual(['onMutate', 'onSuccess', 'onSettled'])
  })

  it('runs onError and onSettled on failure', async () => {
    const failingClient = new ApiClient('https://api.test', async () => {
      throw new Error('Network error')
    })
    const order: string[] = []
    const context = {}

    await expect(
      mutate(queryClient, failingClient, postUserEndpoint, {}, {
        onMutate: () => {
          order.push('onMutate')
          return context
        },
        onError: (err, _params, ctx) => {
          order.push('onError')
          expect(err.message).toBe('Network error')
          expect(ctx).toEqual(context)
        },
        onSettled: (_data, err, _params, ctx) => {
          order.push('onSettled')
          expect(err?.message).toBe('Network error')
          expect(ctx).toEqual(context)
        },
      })
    ).rejects.toThrow('Network error')

    expect(order).toEqual(['onMutate', 'onError', 'onSettled'])
  })

  it('invalidates specified endpoints after success', async () => {
    queryClient.setCachedData(getUsersEndpoint, {}, { list: [] })
    const key = queryClient.getQueryKey(getUsersEndpoint, {})
    expect(store.get(key)?.updatedAt).not.toBe(0)

    await mutate(queryClient, apiClient, postUserEndpoint, {}, {
      invalidates: [getUsersEndpoint],
    })

    expect(store.get(key)?.updatedAt).toBe(0)
  })

  it('passes context from onMutate to all hooks', async () => {
    const rollback: { data: unknown } = { data: null }
    const listEndpoint = defineEndpoint({
      method: 'GET',
      path: '/list',
      params: Type.Any(),
      response: Type.Any(),
    })

    queryClient.setCachedData(listEndpoint, {}, { items: [] })
    const key = queryClient.getQueryKey(listEndpoint, {})

    const failingClient = new ApiClient('https://api.test', async () => {
      throw new Error('Failed')
    })

    await expect(
      mutate(queryClient, failingClient, postUserEndpoint, {}, {
        onMutate: () => {
          const prev = queryClient.getCachedData(listEndpoint, {})
          rollback.data = prev
          queryClient.setCachedData(listEndpoint, {}, { items: [{ id: 99 }] })
          return { rollback }
        },
        onError: (_err, _params, ctx) => {
          queryClient.setCachedData(listEndpoint, {}, ctx.rollback.data)
        },
      })
    ).rejects.toThrow('Failed')

    expect(queryClient.getCachedData(listEndpoint, {})).toEqual({ items: [] })
  })
})
