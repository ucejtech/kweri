# Kweri

**A framework-agnostic API client with stale-while-revalidate caching.**

Kweri gives you TanStack Query-style ergonomics — smart caching, request deduplication, background refetching — without locking you into any framework. The same instance works in React, Vue, vanilla JS, Node.js, and edge runtimes.

## Installation

```bash
npm install kweri
# or
bun add kweri
```

## Quick start

### With an OpenAPI spec (recommended)

Generate typed hooks directly from your spec:

```bash
npx kweri-gen https://api.example.com/openapi.json
```

Then set up path-based hooks and start fetching:

```ts
// src/lib/kweri.ts
import { Kweri } from 'kweri'

export const kweri = new Kweri({
  baseURL: 'https://api.example.com',
  staleTime: 30_000,
  cacheTime: 300_000,
})
```

```ts
// src/hooks/useKweri.ts (React)
import { useSyncExternalStore } from 'react'
import { createReactPathHooks } from 'kweri'
import { EndpointByMethod } from 'kweri/generated'
import { kweri } from '@/lib/kweri'

export const { useGet, usePost, usePut, usePatch, useDelete } =
  createReactPathHooks(useSyncExternalStore, kweri, EndpointByMethod)

export { kweri }
```

```tsx
function UserList() {
  const { data, isLoading } = useGet('/users', {})

  if (isLoading) return <p>Loading...</p>
  return <ul>{data?.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}

function CreateUser() {
  const { mutateAsync, isLoading } = usePost('/users')

  return (
    <button onClick={() => mutateAsync({ body: { name: 'Alice' } })} disabled={isLoading}>
      Create
    </button>
  )
}
```

### Without an OpenAPI spec

Define endpoints manually with `defineEndpoint`:

```ts
import { Type, defineEndpoint } from 'kweri'

const getUsers = defineEndpoint({
  method: 'GET',
  path: '/users',
  params: Type.Object({}),
  response: Type.Array(Type.Object({ id: Type.Number(), name: Type.String() }))
})

const createUser = defineEndpoint({
  method: 'POST',
  path: '/users',
  params: Type.Object({ body: Type.Object({ name: Type.String() }) }),
  response: Type.Object({ id: Type.Number(), name: Type.String() })
})
```

```ts
// src/hooks/useKweri.ts (React)
import { useSyncExternalStore } from 'react'
import { createReactQueryHooks } from 'kweri'
import { kweri } from '@/lib/kweri'

export const { useQuery, useMutation } =
  createReactQueryHooks(useSyncExternalStore, kweri)

export { kweri }
```

```tsx
function UserList() {
  const { data, isLoading } = useQuery(getUsers, {})
  // ...
}

function CreateUser() {
  const { mutateAsync } = useMutation(createUser)
  // ...
}
```

## Vue

```ts
// src/composables/useKweri.ts — with codegen
import { ref, watch, onUnmounted } from 'vue'
import { createVuePathHooks } from 'kweri'
import { EndpointByMethod } from 'kweri/generated'
import { kweri } from '@/lib/kweri'

export const { useGet, usePost, usePut, usePatch, useDelete } =
  createVuePathHooks({ ref, watch, onUnmounted }, kweri, EndpointByMethod)

export { kweri }
```

Without codegen:

```ts
// src/composables/useKweri.ts — without codegen
import { ref, watch, onUnmounted } from 'vue'
import { createVueQueryHooks } from 'kweri'
import { kweri } from '@/lib/kweri'

export const { useQuery, useMutation } =
  createVueQueryHooks({ ref, watch, onUnmounted }, kweri)

export { kweri }
```

```vue
<script setup lang="ts">
import { useGet } from '@/composables/useKweri'

const { data, isLoading } = useGet('/users')
</script>
```

## Vanilla JS / Node.js

```ts
import { kweri } from './lib/kweri'
import { getUsers } from './api/users'

// Subscribe to cache changes
const unsubscribe = kweri.subscribe(getUsers, {}, (entry) => {
  console.log(entry.data)
})

// Trigger a fetch
await kweri.query(getUsers, {})

unsubscribe()
```

## Kweri instance options

```ts
const kweri = new Kweri({
  baseURL: 'https://api.example.com', // required
  staleTime: 30_000,                  // how long data is considered fresh (default: 0)
  cacheTime: 300_000,                 // how long stale data stays in memory (default: 5 min)
  maxRetries: 3,                      // retries for server/network errors (default: 0)
  gcInterval: 60_000,                 // garbage collection interval in ms
  enableDevTools: true,               // floating cache inspector (auto-off in production)
  fetcher: async ({ method, url, body }) => { /* custom HTTP transport */ },
  persistence: myStorageAdapter,      // restore cache across page reloads
})
```

## Cache invalidation

```ts
// Invalidate a specific endpoint + params
kweri.invalidateQuery(getUsers, {})

// Invalidate all keys matching a path (most common after a mutation)
kweri.invalidateByPath('/users')

// Regex patterns work too
kweri.invalidateByPath(/\/users\/\d+/)
```

## Direct cache access

```ts
// Read cached data without a network call
const users = kweri.getCachedData(getUsers, {})

// Write directly into cache (useful for optimistic updates)
kweri.setCachedData(getUsers, {}, [...users, newUser])

// Remove an entry entirely
kweri.removeQuery(getUsers, {})
```

## DevTools

```ts
const kweri = new Kweri({
  baseURL: 'https://api.example.com',
  enableDevTools: true, // mounts a floating overlay in development
})
```

Or mount manually:

```ts
import { mountKweriDevTools } from 'kweri'

const unmount = mountKweriDevTools(kweri)
// unmount() to remove
```

## Code generation

```bash
# From a URL
kweri-gen https://api.example.com/openapi.json

# From a local file
kweri-gen ./openapi.json

# Bundle external $refs first
kweri-gen ./openapi.yaml --bundle
```

Output is written to `.generated/client.js` and importable via `kweri/generated`. Add to your `package.json` scripts to regenerate on install:

```json
{
  "scripts": {
    "generate-api": "kweri-gen https://api.example.com/openapi.json"
  }
}
```

## License

MIT — see [LICENSE](LICENSE) for details.
