import { describe, it, expect } from 'bun:test'
import { createKweriFactory, createKweriClients, presets } from './factory.js'
import { Kweri } from './kweri/index.js'

describe('createKweriFactory', () => {
  it('applies shared defaults and per-call overrides', () => {
    const make = createKweriFactory({ staleTime: 30_000 })
    const a = make('https://a.test')
    const b = make('https://b.test', { staleTime: 1_000 })

    expect(a).toBeInstanceOf(Kweri)
    expect(b).toBeInstanceOf(Kweri)
    // Distinct instances → isolated caches.
    expect(a).not.toBe(b)
    a.destroy()
    b.destroy()
  })
})

describe('createKweriClients', () => {
  it('builds a named map from strings and full configs', () => {
    const clients = createKweriClients(
      {
        main: { baseURL: 'https://main.test', staleTime: 1_000 },
        stocks: 'https://stocks.test', // shorthand
      },
      { cacheTime: 60_000 },
    )

    expect(clients.main).toBeInstanceOf(Kweri)
    expect(clients.stocks).toBeInstanceOf(Kweri)
    expect(clients.main).not.toBe(clients.stocks)
    clients.destroyAll()
  })

  it('exposes a non-enumerable destroyAll that does not appear as a client', () => {
    const clients = createKweriClients({ a: 'https://a.test', b: 'https://b.test' })
    expect(Object.keys(clients)).toEqual(['a', 'b']) // destroyAll not enumerated
    expect(typeof clients.destroyAll).toBe('function')
    clients.destroyAll()
  })

  it('destroyAll tears down every instance', () => {
    const clients = createKweriClients({ a: 'https://a.test', b: 'https://b.test' })
    const spies = [clients.a, clients.b].map((k) => {
      let destroyed = false
      const orig = k.destroy.bind(k)
      k.destroy = () => { destroyed = true; orig() }
      return () => destroyed
    })
    clients.destroyAll()
    expect(spies.every((s) => s())).toBe(true)
  })
})

describe('presets', () => {
  it('exposes the documented profiles', () => {
    expect(Object.keys(presets).sort()).toEqual(['mobile', 'realtime', 'spa', 'ssr'])
    expect(presets.realtime.staleTime).toBe(0)
    expect(presets.ssr).not.toHaveProperty('gcInterval') // GC is automatic
  })

  it('composes with the factory', () => {
    const make = createKweriFactory(presets.spa)
    const k = make('https://api.test')
    expect(k).toBeInstanceOf(Kweri)
    k.destroy()
  })
})
