import { describe, it, expect, afterEach } from 'bun:test'
import { Kweri } from './index.js'
import { defineEndpoint } from '../contract/index.js'
import { Type } from '@sinclair/typebox'

const getThing = defineEndpoint({
  method: 'GET',
  path: '/thing',
  params: Type.Object({}),
  response: Type.Unknown(),
})

const createThing = defineEndpoint({
  method: 'POST',
  path: '/thing',
  params: Type.Object({ body: Type.Object({ name: Type.String() }) }),
  response: Type.Unknown(),
})

const realFetch = global.fetch
function mockFetch(body: unknown, init?: ResponseInit) {
  global.fetch = (async () =>
    new Response(JSON.stringify(body), {
      headers: { 'content-type': 'application/json' },
      ...init,
    })) as any
}

describe('default fetcher (no fetcher provided)', () => {
  afterEach(() => { global.fetch = realFetch })

  it('resolves with parsed data on a 2xx response', async () => {
    mockFetch({ ok: true }, { status: 200 })
    const kweri = new Kweri({ baseURL: 'https://api.test' })
    await expect(kweri.query(getThing, {})).resolves.toEqual({ ok: true })
    kweri.destroy()
  })

  it('throws on a 4xx with status + detail attached', async () => {
    mockFetch({ message: 'Bad credentials' }, { status: 401 })
    const kweri = new Kweri({ baseURL: 'https://api.test' })
    await expect(kweri.mutate(createThing, { body: { name: 'x' } })).rejects.toMatchObject({
      message: 'Bad credentials',
      status: 401,
      detail: { message: 'Bad credentials' },
    })
    kweri.destroy()
  })

  it('falls back to an HTTP status message when the body has none', async () => {
    mockFetch({ code: 'E_OOPS' }, { status: 500, statusText: 'Internal Server Error' })
    const kweri = new Kweri({ baseURL: 'https://api.test' })
    await expect(kweri.query(getThing, {})).rejects.toThrow(/HTTP 500/)
    kweri.destroy()
  })
})
