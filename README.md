# Kweri

**A modern, framework-agnostic query caching and API client library.**

Kweri provides TanStack Query-style caching with TypeBox contract-first API definitions. Works seamlessly with React, Vue, vanilla JavaScript, Node.js, workers, and edge runtimes.

## ✨ Features

- 🚀 **Smart Caching**: Automatic request deduplication, background refetching, and intelligent cache invalidation
- 🔧 **Framework Agnostic**: Use with React, Vue, or any JavaScript environment
- 📝 **Type-Safe**: Full TypeScript support with auto-generated types from OpenAPI specs
- 🛠 **Developer Experience**: Built-in DevTools for inspecting cache state and network requests
- ⚡ **Performance**: Optimized for modern JavaScript runtimes including Bun, Node.js, and edge functions
- 🎯 **Zero Dependencies**: No external runtime dependencies

## 📦 Installation

```bash
npm install kweri
# or
yarn add kweri
# or
bun add kweri
```

## 🚀 Quick Start

### Basic Usage

```typescript
import { Kweri } from 'kweri'

// Create a Kweri instance
const kweri = new Kweri({
  baseURL: 'https://api.example.com',
  enableDevTools: true, // Enables DevTools in development
})

// Simple query
const user = await kweri.query('/users/{id}', { path: { id: '123' } })

// Query with caching options
const posts = await kweri.query('/posts', {
  staleTime: 5000, // Consider fresh for 5 seconds
  cacheTime: 30000, // Keep in cache for 30 seconds
})

// Mutations
const newPost = await kweri.mutate('/posts', {
  method: 'POST',
  body: { title: 'Hello World', content: 'My first post!' },
  onSuccess: () => {
    // Invalidate posts cache after successful creation
    kweri.invalidateByPath('/posts')
  }
})
```

## 🎨 Framework Integration

### React

```typescript
import { createReactQueryHooks } from 'kweri/adapters/react'
import { useSyncExternalStore } from 'react'

const { useQuery, useMutation } = createReactQueryHooks({ useSyncExternalStore })

function UserProfile({ userId }) {
  const { data: user, status, error } = useQuery(kweri, '/users/{id}', {
    path: { id: userId }
  })

  const updateUser = useMutation(kweri, '/users/{id}', {
    method: 'PATCH',
    onSuccess: () => {
      // Automatically invalidates and refetches user data
      kweri.invalidateByPath('/users')
    }
  })

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error: {error?.message}</div>

  return (
    <div>
      <h1>{user?.name}</h1>
      <button onClick={() => updateUser.mutate({ name: 'New Name' })}>
        Update Name
      </button>
    </div>
  )
}
```

### Vue

```typescript
import { createVueQueryHooks } from 'kweri/adapters/vue'
import { ref, watch, onUnmounted } from 'vue'

const { useQuery, useMutation } = createVueQueryHooks({ 
  ref, 
  watch, 
  onUnmounted 
})

// In your Vue component
export default {
  setup() {
    const userId = ref('123')
    
    const { data: user, status, error } = useQuery(kweri, '/users/{id}', {
      path: { id: userId }
    })

    const updateUser = useMutation(kweri, '/users/{id}', {
      method: 'PATCH'
    })

    return {
      user,
      status,
      error,
      updateUser,
      async handleUpdate() {
        await updateUser.mutate({ 
          path: { id: userId.value },
          body: { name: 'Updated Name' }
        })
      }
    }
  }
}
```

## 🔧 API Client Generation

Generate a fully-typed API client from OpenAPI specifications:

```bash
# Install the CLI globally (optional)
npm install -g kweri

# Generate client from OpenAPI spec
kweri-gen https://api.example.com/openapi.json
```

This creates a typed client in `node_modules/kweri/.generated/` with two usage patterns:

### Method-Based API (Generated)

```typescript
import { createClient } from 'kweri'

const api = createClient({ baseURL: 'https://api.example.com' })

// Auto-generated, fully-typed methods
const user = await api.getUser({ id: '123' })
const post = await api.createPost({ title: 'Hello', body: 'World' })
const updatedUser = await api.updateUser({ id: '123', name: 'John' })
```

### Path-Based API (Generic)

```typescript
import { createClient } from 'kweri'

const api = createClient({ baseURL: 'https://api.example.com' })

// Generic methods with full type inference
const user = await api.get('/users/{id}', { path: { id: '123' } })
const post = await api.post('/posts', { body: { title: 'Hello', body: 'World' } })
const updated = await api.patch('/users/{id}', { 
  path: { id: '123' }, 
  body: { name: 'John' } 
})
```

### Auto-Regeneration

Keep your API client in sync automatically:

```json
{
  "scripts": {
    "postinstall": "kweri-gen https://api.example.com/openapi.json"
  }
}
```

## 🛠 Configuration

### Kweri Instance Options

```typescript
const kweri = new Kweri({
  // Base URL for all requests
  baseURL: 'https://api.example.com',
  
  // Default cache settings
  defaultStaleTime: 5 * 60 * 1000, // 5 minutes
  defaultCacheTime: 10 * 60 * 1000, // 10 minutes
  
  // Enable DevTools (auto-disabled in production)
  enableDevTools: true,
  
  // Garbage collection interval
  gcInterval: 5 * 60 * 1000, // 5 minutes
  
  // Custom headers
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  
  // Request interceptor
  onRequest: (url, options) => {
    console.log(`Making request to ${url}`)
    return options
  },
  
  // Response interceptor
  onResponse: (response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    return response
  }
})
```

### Query Options

```typescript
// Per-query configuration
const data = await kweri.query('/endpoint', {
  // Cache timing
  staleTime: 30000,    // Consider fresh for 30 seconds
  cacheTime: 300000,   // Keep in cache for 5 minutes
  
  // Request options
  headers: { 'X-Custom': 'header' },
  signal: abortController.signal,
  
  // Retry configuration
  retry: 3,
  retryDelay: (attempt) => Math.pow(2, attempt) * 1000,
  
  // Background refetch
  refetchOnWindowFocus: true,
  refetchInterval: 60000, // Refetch every minute
})
```

## 🔍 DevTools

Kweri includes powerful DevTools for debugging and monitoring your queries:

```typescript
import { mountKweriDevTools } from 'kweri/devtools'

// Mount DevTools (automatically disabled in production)
const unmount = mountKweriDevTools(kweri, {
  position: 'bottom-right' // or 'bottom-left'
})

// Unmount when done
// unmount()
```

### DevTools Features

- **Query Inspector**: View all cached queries, their status, and data
- **Network Monitor**: Track in-flight requests and their timing
- **Event Log**: See cache mutations, invalidations, and refetches in real-time
- **Cache Invalidation**: Manually invalidate queries during development
- **JSON Viewer**: Inspect query data with syntax highlighting and collapsible trees

![DevTools Interface](https://via.placeholder.com/800x400?text=Kweri+DevTools+Interface)

## 🎯 Advanced Usage

### Custom Cache Keys

```typescript
// Custom cache key generation
const data = await kweri.query('/users/{id}', {
  path: { id: userId },
  queryKey: ['user', userId, { version: 'v2' }] // Custom cache key
})
```

### Optimistic Updates

```typescript
const mutation = kweri.mutate('/posts/{id}', {
  method: 'PATCH',
  onMutate: async (variables) => {
    // Cancel outgoing refetches
    await kweri.cancelQuery(['posts', variables.path.id])
    
    // Snapshot previous value
    const previousPost = kweri.getCachedData(['posts', variables.path.id])
    
    // Optimistically update
    kweri.setCachedData(['posts', variables.path.id], {
      ...previousPost,
      ...variables.body
    })
    
    return { previousPost }
  },
  onError: (error, variables, context) => {
    // Rollback on error
    if (context?.previousPost) {
      kweri.setCachedData(['posts', variables.path.id], context.previousPost)
    }
  },
  onSettled: () => {
    // Refetch after mutation
    kweri.invalidateByPath('/posts')
  }
})
```

### Background Sync

```typescript
// Setup periodic background refetch
const subscription = kweri.subscribe(['posts'], () => {
  console.log('Posts updated!')
})

// Refetch stale queries on window focus
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    kweri.refetchStaleQueries()
  }
})
```

## 📋 API Reference

### Kweri Instance Methods

| Method | Description |
|--------|-------------|
| `query(endpoint, options)` | Execute a GET request with caching |
| `mutate(endpoint, options)` | Execute a mutation (POST, PUT, PATCH, DELETE) |
| `getCachedData(key)` | Retrieve data from cache |
| `setCachedData(key, data)` | Set data in cache |
| `invalidateQuery(key)` | Mark specific query as stale |
| `invalidateByPath(pattern)` | Invalidate queries matching a pattern |
| `removeQuery(key)` | Remove query from cache entirely |
| `subscribe(key, callback)` | Subscribe to cache changes |
| `isInFlight(key)` | Check if query is currently executing |

### Hook Return Values

#### useQuery

```typescript
{
  data: T | undefined,
  status: 'idle' | 'loading' | 'success' | 'error',
  error: Error | null,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean
}
```

#### useMutation

```typescript
{
  mutate: (variables) => Promise<T>,
  status: 'idle' | 'loading' | 'success' | 'error',
  error: Error | null,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
