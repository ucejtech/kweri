function generateClientCode(spec, schemas, outputPath, cwd) {
  const methods = extractMethods(spec)
  const endpointMaps = generateEndpointMaps(spec)

  const apiClientImport = `import { ApiClient } from 'kweri'`
  const typeboxImport = `import { Type, type Static } from 'kweri'`

  return `${schemas}

${apiClientImport}
${typeboxImport}

${endpointMaps}

export interface ClientConfig {
  baseURL: string
  fetcher?: (options: { method: string; url: string; body?: any }) => Promise<Response>
}

export class GeneratedClient {
  private client: ApiClient

  constructor(config) {
    const defaultFetcher = async (options) => {
      return fetch(options.url, {
        method: options.method,
        headers: options.body ? { 'Content-Type': 'application/json' } : {},
        body: options.body ? JSON.stringify(options.body) : undefined
      })
    }

    this.client = new ApiClient(
      config.baseURL,
      config.fetcher || defaultFetcher
    )
  }

${generateGenericMethods(spec)}

${methods.map((m) => generateMethodCode(m)).join('\n\n')}
}

export function createClient(config) {
  return new GeneratedClient(config)
}
`
}

function generateEndpointMaps(spec) {
  const endpointsByMethod = {
    get: [],
    post: [],
    put: [],
    patch: [],
    delete: []
  }

  for (const [path, pathItem] of Object.entries(spec.paths || {})) {
    if (!pathItem) continue

    for (const [method, operation] of Object.entries(pathItem)) {
      const methodLower = method.toLowerCase()
      if (!endpointsByMethod[methodLower]) continue
      if (!operation || typeof operation !== 'object') continue

      const op = operation
      const paramsSchema = generateParamsSchemaForMap(op, path, methodLower)
      const responseSchema = generateResponseSchemaForMap(op)

      endpointsByMethod[methodLower].push({
        path,
        paramsSchema,
        responseSchema
      })
    }
  }

  const maps = []
  
  for (const [method, endpoints] of Object.entries(endpointsByMethod)) {
    if (endpoints.length === 0) continue

    const methodCapitalized = method.charAt(0).toUpperCase() + method.slice(1)
    const entries = endpoints.map(e => {
      return `  '${e.path}': Type.Object({
    parameters: ${e.paramsSchema},
    response: ${e.responseSchema}
  })`
    }).join(',\n')

    maps.push(`export const ${methodCapitalized}Endpoints = Type.Object({
${entries}
})

export type ${methodCapitalized}EndpointsType = {
  [K in keyof Static<typeof ${methodCapitalized}Endpoints>]: {
    parameters: Static<typeof ${methodCapitalized}Endpoints>[K]['parameters']
    response: Static<typeof ${methodCapitalized}Endpoints>[K]['response']
  }
}`)
  }

  return maps.join('\n\n')
}

function generateParamsSchemaForMap(op, path, method) {
  const parts = []

  const pathParams = (op.parameters || []).filter((p) => 'in' in p && p.in === 'path')
  const queryParams = (op.parameters || []).filter((p) => 'in' in p && p.in === 'query')

  if (pathParams.length > 0 || queryParams.length > 0 || (['post', 'put', 'patch'].includes(method) && op.requestBody)) {
    const fields = []
    
    if (pathParams.length > 0) {
      const pathFields = pathParams.map((p) => `${p.name}: Type.String()`).join(', ')
      fields.push(`path: Type.Object({ ${pathFields} })`)
    }

    if (queryParams.length > 0) {
      const queryFields = queryParams.map((p) => `${p.name}: Type.Optional(Type.String())`).join(', ')
      fields.push(`query: Type.Optional(Type.Object({ ${queryFields} }))`)
    }

    if (['post', 'put', 'patch'].includes(method) && op.requestBody) {
      fields.push('body: Type.Any()')
    }

    if (fields.length > 0) {
      return `Type.Object({ ${fields.join(', ')} })`
    }
  }

  return 'Type.Object({})'
}

function generateResponseSchemaForMap(op) {
  return 'Type.Any()'
}

function generateGenericMethods(spec) {
  const methods = []
  const methodTypes = ['get', 'post', 'put', 'patch', 'delete']

  for (const methodType of methodTypes) {
    const hasEndpoints = Object.entries(spec.paths || {}).some(([path, pathItem]) => {
      return pathItem && pathItem[methodType]
    })

    if (!hasEndpoints) continue

    const methodCapitalized = methodType.charAt(0).toUpperCase() + methodType.slice(1)
    
    methods.push(`  async ${methodType}<Path extends keyof ${methodCapitalized}EndpointsType>(
    path: Path,
    params: ${methodCapitalized}EndpointsType[Path]['parameters'] = {} as any
  ): Promise<${methodCapitalized}EndpointsType[Path]['response']> {
    const flatParams = { 
      ...(params.path || {}), 
      ...(params.query || {}), 
      ...(params.body ? { body: params.body } : {}) 
    }

    const endpoint = {
      method: '${methodType.toUpperCase()}' as const,
      path: path as string,
      params: Type.Any(),
      response: Type.Any()
    }

    return this.client.execute(endpoint, flatParams)
  }`)
  }

  return methods.join('\n\n')
}

function extractMethods(spec) {
  const methods = []

  for (const [path, pathItem] of Object.entries(spec.paths || {})) {
    if (!pathItem) continue

    for (const [method, operation] of Object.entries(pathItem)) {
      if (!['get', 'post', 'put', 'patch', 'delete'].includes(method)) continue
      if (!operation || typeof operation !== 'object') continue

      const op = operation
      const operationId = op.operationId || `${method}${path.replace(/\//g, '_')}`

      const methodName = operationId
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, (c) => c.toLowerCase())

      const hasParams = !!(op.parameters?.length || op.requestBody)

      methods.push({
        name: methodName,
        method: method.toUpperCase(),
        path,
        operationId,
        hasParams,
        paramsSchema: generateParamsSchema(op, path, method),
        responseSchema: generateResponseSchema(op)
      })
    }
  }

  return methods
}

function generateParamsSchema(op, path, method) {
  const parts = []

  const pathParams = (op.parameters || []).filter((p) => 'in' in p && p.in === 'path')

  if (pathParams.length > 0) {
    const fields = pathParams.map((p) => `${p.name}: Type.String()`).join(', ')
    parts.push(fields)
  }

  if (method === 'get') {
    const queryParams = (op.parameters || []).filter((p) => 'in' in p && p.in === 'query')

    if (queryParams.length > 0) {
      const fields = queryParams
        .map((p) => `${p.name}: Type.Optional(Type.String())`)
        .join(', ')
      parts.push(fields)
    }
  }

  if (['post', 'put', 'patch'].includes(method) && op.requestBody) {
    parts.push('body: Type.Any()')
  }

  if (parts.length === 0) {
    return 'Type.Object({})'
  }

  return `Type.Object({ ${parts.join(', ')} })`
}

function generateResponseSchema(op) {
  return 'Type.Any()'
}

function generateMethodCode(method) {
  const schemaName = `${method.name}ParamsSchema`
  const responseSchemaName = `${method.name}ResponseSchema`

  const paramsType = method.hasParams ? `params: any` : ''

  return `  async ${method.name}(${paramsType}): Promise<any> {
    const ${schemaName} = ${method.paramsSchema}
    const ${responseSchemaName} = ${method.responseSchema}

    const endpoint = {
      method: '${method.method}' as const,
      path: '${method.path}',
      params: ${schemaName},
      response: ${responseSchemaName}
    }

    return this.client.execute(endpoint${method.hasParams ? ', params' : ', {}'})
  }`
}

export { generateClientCode }
