import { Kweri, type KweriOptions } from './kweri/index.js'

export type KweriDefaults = Omit<KweriOptions, 'baseURL'>

/** Returns a Kweri constructor with `defaults` baked in; per-call `overrides` win. */
export function createKweriFactory(defaults: KweriDefaults = {}) {
  return (baseURL: string, overrides?: Partial<KweriOptions>): Kweri =>
    new Kweri({ ...defaults, baseURL, ...overrides })
}

export type KweriClientConfig = string | (Partial<KweriOptions> & { baseURL: string })

export type KweriClients<T extends Record<string, KweriClientConfig>> = {
  [K in keyof T]: Kweri
} & { destroyAll: () => void }

/**
 * Several named Kweri instances sharing `defaults`. Each entry is a baseURL
 * string or full options. Returns the instances keyed by name plus a
 * non-enumerable `destroyAll()` (so `destroyAll` is a reserved client name).
 * In SSR, call this per request, not at module scope.
 */
export function createKweriClients<T extends Record<string, KweriClientConfig>>(
  clients: T,
  defaults: KweriDefaults = {}
): KweriClients<T> {
  const make = createKweriFactory(defaults)
  const out = {} as KweriClients<T>
  const instances: Kweri[] = []

  for (const key of Object.keys(clients) as Array<keyof T>) {
    const config = clients[key]
    if (config === undefined) continue
    const instance =
      typeof config === 'string' ? make(config) : make(config.baseURL, config)
    ;(out as Record<keyof T, Kweri>)[key] = instance
    instances.push(instance)
  }

  Object.defineProperty(out, 'destroyAll', {
    value: () => instances.forEach((k) => k.destroy()),
    enumerable: false,
  })

  return out
}

/** Default profiles for common project types. GC is automatic, so no `gcInterval`. */
export const presets = {
  spa: { staleTime: 30_000, cacheTime: 5 * 60_000, maxRetries: 2 },
  ssr: { staleTime: 60_000, maxRetries: 0 },
  mobile: { staleTime: 60_000, cacheTime: 30 * 60_000, maxRetries: 3 },
  realtime: { staleTime: 0, cacheTime: 30_000, maxRetries: 1 },
} satisfies Record<string, KweriDefaults>
