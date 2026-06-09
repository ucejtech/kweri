

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logo/dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="logo/light.svg">
  <img src="logo/light.svg" alt="kweri" width="100" />
</picture>

**A framework-agnostic API client with stale-while-revalidate caching.**

Kweri gives you TanStack Query-style ergonomics (smart caching, request deduplication, background refetching) without locking you into any framework.

## Installation

```bash
npm install kweri
# or
bun add kweri
```

## Quick start

**With an OpenAPI spec**, generate a typed client into your own source tree:

```bash
npx kweri-gen https://api.example.com/openapi.json --out src/api/kweri
```

This writes `src/api/kweri/client.ts` — commit it like any other source file. It
exports an `EndpointByMethod` map for path-based hooks plus a `createClient`
whose every call runs through kweri (cache, dedup, stale-while-revalidate):

```ts
import { Kweri } from 'kweri'
import { createClient, EndpointByMethod } from './api/kweri/client'

const kweri = new Kweri({ baseURL: 'https://api.example.com' })

// Typed client:
const api = createClient(kweri)
await api.getUser({ path: { id: '123' } })

// Or path-based hooks:
export const { useGet, usePost, usePut, usePatch, useDelete } =
  createReactPathHooks(useSyncExternalStore, kweri, EndpointByMethod)
```

**Without an OpenAPI spec**, define endpoints manually:

```ts
export const { useQuery, useMutation } =
  createReactQueryHooks(useSyncExternalStore, kweri)
```

## Documentation

Full docs at **[kweri.uchenna.xyz](https://kweri.uchenna.xyz)**: quickstart, framework guides, API reference, and more.

## License

MIT. See [LICENSE](LICENSE) for details.
