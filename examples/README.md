# kweri Examples

## Generated Client Usage

### 1. Generate from OpenAPI

```bash
# Generate typed client from OpenAPI spec
kweri-gen https://petstore3.swagger.io/api/v3/openapi.json
```

This creates `.kweri/client.ts` with:
- TypeBox schemas for all models (Pet, User, Order, etc.)
- Typed client class with methods for every endpoint
- Auto-complete and type checking for all API calls

### 2. Use the Generated Client

```typescript
import { createClient } from 'kweri'

const api = createClient({ 
  baseURL: 'https://petstore3.swagger.io/api/v3'
})

// All methods are fully typed!
const pet = await api.getPetById({ petId: '1' })
const user = await api.getUserByName({ username: 'john' })
const order = await api.getOrderById({ orderId: '10' })
```

### 3. Custom Fetcher

Provide your own fetcher for auth, retries, etc:

```typescript
const api = createClient({
  baseURL: 'https://api.example.com',
  fetcher: async (options) => {
    return fetch(options.url, {
      method: options.method,
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN',
        'Content-Type': 'application/json'
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    })
  }
})
```

### 4. Auto-Regeneration

Add to your `package.json`:

```json
{
  "scripts": {
    "postinstall": "kweri-gen https://api.example.com/openapi.json"
  }
}
```

Now the client regenerates automatically when:
- Dependencies are installed
- You run `npm install` or `bun install`
- New team members clone the repo

## Benefits

✅ **Zero boilerplate** - One command generates everything
✅ **Type-safe** - Full TypeScript types from OpenAPI
✅ **Auto-complete** - All endpoints and parameters
✅ **Always in sync** - Regenerate when API changes
✅ **Framework-agnostic** - Works everywhere (React, Vue, Node, workers)
