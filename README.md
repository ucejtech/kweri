# Kweri

Framework-agnostic API client and caching layer (TanStack Query–style, TypeBox contract-first). Usable from React, Vue, Node, workers, and edge runtimes.

**New to the codebase?** See **[ONBOARDING.md](./misc/ONBOARDING.md)**.

## Installation

```bash
bun add kweri
```

## Commands

```bash
bun install
bun run build   # Compile to dist/ (for Node, publish)
bun test
```

**Hybrid build:** Dev uses TypeScript directly (Bun); publishing compiles to JS for Node compatibility.

## CLI Generator

Generate a fully-typed API client from OpenAPI specs:

```bash
kweri-gen https://api.example.com/openapi.json
```

This generates a compiled client (`.js` + `.d.ts`) inside `node_modules/kweri/.generated/` with **two usage styles**:

### Option 1: Explicit Methods

```typescript
import { createClient } from 'kweri'

const api = createClient({ baseURL: 'https://api.example.com' })

// Fully typed methods auto-generated from OpenAPI
await api.getUser({ id: '123' })
await api.createPost({ title: 'Hello', body: 'World' })
await api.updateUser({ id: '123', name: 'John' })
```

### Option 2: Generic Methods

```typescript
import { createClient } from 'kweri'

const api = createClient({ baseURL: 'https://api.example.com' })

// Generic methods with path-based typing
await api.get('/users/{id}', { path: { id: '123' } })
await api.post('/posts', { body: { title: 'Hello', body: 'World' } })
await api.patch('/users/{id}', { path: { id: '123' }, body: { name: 'John' } })
```

**Auto-regenerate on install:**
```json
{
  "scripts": {
    "postinstall": "kweri-gen https://api.example.com/openapi.json"
  }
}
```

**Benefits:**
- ✅ No need to install `@sinclair/typebox` - it's bundled in kweri
- ✅ Generated code lives in the package, not your source tree
- ✅ Import from `'kweri'` - works with Node (compiled to .js)
- ✅ TypeBox schemas are re-exported from kweri
- ✅ Choose your style: explicit methods or generic path-based methods

**Note:** Uses [typed-openapi](https://github.com/astahmer/typed-openapi) for robust OpenAPI parsing.
