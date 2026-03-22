# Framework adapter usage

Wire kweri's cache and mutations into React or Vue. The core package stays framework-agnostic; you pass your framework's APIs into the factory.

---

## Setup (shared)

```ts
// src/lib/kweri.ts
import { Kweri } from 'kweri'

export const kweri = new Kweri({
  baseURL: 'https://api.example.com',
  staleTime: 30_000,   // consider data fresh for 30s
  cacheTime: 300_000,  // keep unused entries for 5m
  gcInterval: 60_000,  // sweep every 60s
  enableDevTools: true, // optional: floating panel (ignored in production — see Devtools section)
})
```

After running `kweri-gen <openapi-spec>`, all typed endpoints are available as flat exports:

```ts
import { findPetsByStatus, getPetById } from 'kweri/generated'

findPetsByStatus   // fully typed params + response
getPetById         // autocomplete for all endpoints
```

---

## React

### 1. Create hooks once

```ts
// src/lib/kweri-hooks.ts
import { useSyncExternalStore } from 'react'
import { createReactQueryHooks } from 'kweri'

export const { useQuery, useMutation } = createReactQueryHooks(useSyncExternalStore)
```

### 2. Use in a component

```tsx
// src/components/PetList.tsx
import { useQuery } from '../lib/kweri-hooks'
import { kweri } from '../lib/kweri'
import { findPetsByStatus } from 'kweri/generated'

export function PetList() {
  const { data, status, error, refetch, isFetching } = useQuery(
    kweri,
    findPetsByStatus,
    { query: { status: 'available' } }  // fully typed, autocomplete works
  )

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error: {error?.message}</div>

  return (
    <>
      <ul>
        {data?.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
      <button onClick={() => refetch()} disabled={isFetching}>
        Refresh
      </button>
    </>
  )
}
```

### 3. Mutations

```ts
import { kweri } from '../lib/kweri'
import { addPet, findPetsByStatus } from 'kweri/generated'

await kweri.mutate(addPet, { body: { name: 'Fido', photoUrls: [] } }, {
  onSuccess: (data) => console.log('Created:', data),
  invalidates: [findPetsByStatus],
})
```

---

## Vue

### 1. Create hooks once

```ts
// src/composables/kweri.ts
import { ref, watch, onUnmounted } from 'vue'
import { createVueQueryHooks } from 'kweri'

export const { useQuery } = createVueQueryHooks({ ref, watch, onUnmounted })
```

### 2. Use in a component

```vue
<!-- src/components/PetList.vue -->
<script setup lang="ts">
import { useQuery } from '../composables/kweri'
import { kweri } from '../lib/kweri'
import { findPetsByStatus } from 'kweri/generated'

const { data, status, error, refetch } = useQuery(
  kweri,
  findPetsByStatus,
  { query: { status: 'available' } }
)
</script>

<template>
  <div v-if="status === 'loading'">Loading...</div>
  <div v-else-if="status === 'error'">Error: {{ error?.message }}</div>
  <ul v-else-if="data">
    <li v-for="pet in data" :key="pet.id">{{ pet.name }}</li>
  </ul>
  <button @click="refetch()">Refresh</button>
</template>
```

---

## Without hooks (Vuex/Pinia/vanilla)

`kweri.query()` works standalone -- no hooks needed. Cache dedup and freshness checks are built in.

```ts
// stores/pets.ts (Pinia example)
import { defineStore } from 'pinia'
import { kweri } from '@/lib/kweri'
import { findPetsByStatus } from 'kweri/generated'

export const usePetStore = defineStore('pets', {
  state: () => ({ pets: [] as any[] }),
  actions: {
    async fetchPets() {
      // Checks cache first, deduplicates concurrent calls
      this.pets = await kweri.query(findPetsByStatus, {
        query: { status: 'available' }
      })
    }
  }
})
```

You can also subscribe to cache changes for push-style reactivity:

```ts
kweri.subscribe(findPetsByStatus, params, (entry) => {
  if (entry.status === 'success') store.pets = entry.data
})
```

---

## Devtools (query cache overlay)

Vanilla DOM panel (no React/Vue in the panel itself). Shows cached queries, observer counts, in-flight fetches, stale/fresh, and per-query **Invalidate** / **Remove**.

Enable when creating `Kweri` (mounts automatically in the browser; no-op in SSR / non-DOM):

```ts
const kweri = new Kweri({
  baseURL: 'https://api.example.com',
  enableDevTools: true,
  devtools: { position: 'bottom-right' }, // optional
})
```

**Production:** `enableDevTools: true` is treated as **false** when the runtime looks like production: `process.env.NODE_ENV === 'production'`, `BUN_ENV` / `VERCEL_ENV`, or Vite-style `import.meta.env.PROD` / `MODE === 'production'`. You can leave `enableDevTools: true` in shared config; production bundles won’t mount the overlay. (`mountKweriDevTools` is not gated—call it only when you intend to show UI.)

You can still mount manually if you prefer (e.g. lazy or conditional UI):

```ts
import { mountKweriDevTools } from 'kweri'

const unmount = mountKweriDevTools(kweri, { position: 'bottom-right' })
```

Call `kweri.destroy()` to tear down the client and unmount devtools when mounted via `enableDevTools`.

Programmatic snapshot (no UI):

```ts
const snap = kweri.getDevToolsSnapshot()
kweri.onCacheChange((key, entry) => { /* … */ })
```

---

## Summary

| Setup | Code |
|-------|------|
| Init | `const kweri = new Kweri({ baseURL: '...' })` |
| React hooks | `createReactQueryHooks(useSyncExternalStore)` |
| Vue hooks | `createVueQueryHooks({ ref, watch, onUnmounted })` |
| Query | `kweri.query(findPetsByStatus, params)` |
| Mutate | `kweri.mutate(addPet, params, { invalidates: [...] })` |
| Subscribe | `kweri.subscribe(endpoint, params, callback)` |
| Devtools | `new Kweri({ ..., enableDevTools: true })` or `mountKweriDevTools(kweri)` |
