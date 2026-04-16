function generateClientCode(spec, schemas, outputPath, cwd) {
  const methods = extractMethods(spec);
  const endpointMaps = generateEndpointMaps(spec);
  const endpointExports = generateEndpointExports(methods);

  const kweriImports = `import { ApiClient, defineEndpoint } from 'kweri'`;

  return `${schemas}

${kweriImports}

${endpointMaps}

${endpointExports}

export interface ClientConfig {
  baseURL: string
  fetcher?: (options: { method: string; url: string; body?: unknown }) => Promise<Response>
}

export class GeneratedClient {
  private client: ApiClient

  constructor(config: ClientConfig) {
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
`;
}

function generateEndpointMaps(spec) {
  const endpointsByMethod = {
    get: [],
    post: [],
    put: [],
    patch: [],
    delete: []
  };

  for (const [path, pathItem] of Object.entries(spec.paths || {})) {
    if (!pathItem) continue;

    for (const [method, operation] of Object.entries(pathItem)) {
      const methodLower = method.toLowerCase();
      if (!endpointsByMethod[methodLower]) continue;
      if (!operation || typeof operation !== 'object') continue;

      const op = operation;
      const paramsSchema = generateParamsSchemaForMap(op, path, methodLower);
      const responseSchema = generateResponseSchemaForMap(op);

      endpointsByMethod[methodLower].push({
        path,
        paramsSchema,
        responseSchema
      });
    }
  }

  const maps = [];

  for (const [method, endpoints] of Object.entries(endpointsByMethod)) {
    if (endpoints.length === 0) continue;

    const methodCapitalized = method.charAt(0).toUpperCase() + method.slice(1);
    const entries = endpoints
      .map((e) => {
        return `  '${e.path}': Type.Object({
    parameters: ${e.paramsSchema},
    response: ${e.responseSchema}
  })`;
      })
      .join(',\n');

    maps.push(`export const ${methodCapitalized}Endpoints = Type.Object({
${entries}
})

export type ${methodCapitalized}EndpointsType = {
  [K in keyof Static<typeof ${methodCapitalized}Endpoints>]: {
    parameters: Static<typeof ${methodCapitalized}Endpoints>[K]['parameters']
    response: Static<typeof ${methodCapitalized}Endpoints>[K]['response']
  }
}`);
  }

  return maps.join('\n\n');
}

function generateTypeForParam(param) {
  const schema = param.schema || {};

  let typeExpr;

  if (schema.enum && Array.isArray(schema.enum)) {
    const literals = schema.enum
      .map((v) => `Type.Literal(${JSON.stringify(v)})`)
      .join(', ');
    typeExpr =
      schema.enum.length === 1 ? literals : `Type.Union([${literals}])`;
  } else if (schema.type === 'integer' || schema.type === 'number') {
    typeExpr = 'Type.Number()';
  } else if (schema.type === 'boolean') {
    typeExpr = 'Type.Boolean()';
  } else if (schema.type === 'array') {
    const itemSchema = schema.items || {};
    let itemType;
    if (itemSchema.enum && Array.isArray(itemSchema.enum)) {
      const literals = itemSchema.enum
        .map((v) => `Type.Literal(${JSON.stringify(v)})`)
        .join(', ');
      itemType =
        itemSchema.enum.length === 1 ? literals : `Type.Union([${literals}])`;
    } else if (itemSchema.type === 'number' || itemSchema.type === 'integer') {
      itemType = 'Type.Number()';
    } else {
      itemType = 'Type.String()';
    }
    typeExpr = `Type.Array(${itemType})`;
  } else {
    typeExpr = 'Type.String()';
  }

  return `Type.Optional(${typeExpr})`;
}

function generateParamsSchemaForMap(op, path, method) {
  const parts = [];

  const pathParams = (op.parameters || []).filter(
    (p) => 'in' in p && p.in === 'path'
  );
  const queryParams = (op.parameters || []).filter(
    (p) => 'in' in p && p.in === 'query'
  );

  if (
    pathParams.length > 0 ||
    queryParams.length > 0 ||
    (['post', 'put', 'patch'].includes(method) && op.requestBody)
  ) {
    const fields = [];

    if (pathParams.length > 0) {
      const pathFields = pathParams
        .map((p) => `${p.name}: Type.String()`)
        .join(', ');
      fields.push(`path: Type.Object({ ${pathFields} })`);
    }

    if (queryParams.length > 0) {
      const queryFields = queryParams
        .map((p) => `${p.name}: ${generateTypeForParam(p)}`)
        .join(', ');
      fields.push(`query: Type.Optional(Type.Object({ ${queryFields} }))`);
    }

    if (['post', 'put', 'patch'].includes(method) && op.requestBody) {
      fields.push('body: Type.Any()');
    }

    if (fields.length > 0) {
      return `Type.Object({ ${fields.join(', ')} })`;
    }
  }

  return 'Type.Object({})';
}

function generateResponseSchemaForMap(op) {
  return 'Type.Any()';
}

function generateGenericMethods(spec) {
  const methods = [];
  const methodTypes = ['get', 'post', 'put', 'patch', 'delete'];

  for (const methodType of methodTypes) {
    const hasEndpoints = Object.entries(spec.paths || {}).some(
      ([path, pathItem]) => {
        return pathItem && pathItem[methodType];
      }
    );

    if (!hasEndpoints) continue;

    const methodCapitalized =
      methodType.charAt(0).toUpperCase() + methodType.slice(1);

    methods.push(`  async ${methodType}<Path extends keyof ${methodCapitalized}EndpointsType>(
    path: Path,
    params: ${methodCapitalized}EndpointsType[Path]['parameters'] = {} as ${methodCapitalized}EndpointsType[Path]['parameters']
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
  }`);
  }

  return methods.join('\n\n');
}

function findSuccessResponseCode(op) {
  if (!op.responses) return null;
  const codes = Object.keys(op.responses);
  return codes.find((c) => c >= '200' && c < '300') || null;
}

function extractMethods(spec) {
  const methods = [];

  for (const [path, pathItem] of Object.entries(spec.paths || {})) {
    if (!pathItem) continue;

    for (const [method, operation] of Object.entries(pathItem)) {
      if (!['get', 'post', 'put', 'patch', 'delete'].includes(method)) continue;
      if (!operation || typeof operation !== 'object') continue;

      const op = operation;
      const operationId =
        op.operationId || `${method}${path.replace(/[\/{}]/g, '_')}`;
      const sanitizedOperationId = operationId.replace(/[^a-zA-Z0-9]/g, '_');
      const endpointSchemaName = `${method.toLowerCase()}${path.replace(/[\/{}:\-]/g, '_')}`;

      const methodName = operationId
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, (c) => c.toLowerCase());

      const hasParams = !!(op.parameters?.length || op.requestBody);

      const successCode = findSuccessResponseCode(op);

      methods.push({
        name: methodName,
        method: method.toUpperCase(),
        path,
        operationId,
        endpointSchemaName,
        hasParams,
        successCode,
        paramsSchema: generateParamsSchema(op, path, method),
        endpointParamsSchema: generateParamsSchemaForMap(op, path, method),
        responseSchema: generateResponseSchema(op)
      });
    }
  }

  return methods;
}

function generateParamsSchema(op, path, method) {
  const parts = [];

  const pathParams = (op.parameters || []).filter(
    (p) => 'in' in p && p.in === 'path'
  );

  if (pathParams.length > 0) {
    const fields = pathParams.map((p) => `${p.name}: Type.String()`).join(', ');
    parts.push(fields);
  }

  if (method === 'get') {
    const queryParams = (op.parameters || []).filter(
      (p) => 'in' in p && p.in === 'query'
    );

    if (queryParams.length > 0) {
      const fields = queryParams
        .map((p) => `${p.name}: ${generateTypeForParam(p)}`)
        .join(', ');
      parts.push(fields);
    }
  }

  if (['post', 'put', 'patch'].includes(method) && op.requestBody) {
    parts.push('body: Type.Any()');
  }

  if (parts.length === 0) {
    return 'Type.Object({})';
  }

  return `Type.Object({ ${parts.join(', ')} })`;
}

function generateResponseSchema(op) {
  return 'Type.Any()';
}

function generateMethodCode(method) {
  const schemaName = `${method.name}ParamsSchema`;
  const responseSchemaName = `${method.name}ResponseSchema`;

  const paramsType = method.hasParams
    ? `params: Static<typeof ${method.endpointSchemaName}>['parameters']`
    : '';
  const returnType = `Promise<Static<typeof ${method.endpointSchemaName}>['responses'][keyof Static<typeof ${method.endpointSchemaName}>['responses']]>`;

  return `  async ${method.name}(${paramsType}): ${returnType} {
    const ${schemaName} = ${method.paramsSchema}
    const ${responseSchemaName} = ${method.responseSchema}

    const endpoint = {
      method: '${method.method}' as const,
      path: '${method.path}',
      params: ${schemaName},
      response: ${responseSchemaName}
    }

    return this.client.execute(endpoint${method.hasParams ? ', params' : ''})
  }`;
}

function generateEndpointExports(methods) {
  const exports = [];

  for (const m of methods) {
    const paramsExpr = m.hasParams ? m.endpointParamsSchema : 'Type.Object({})';

    const responseExpr = m.successCode
      ? `${m.endpointSchemaName}.properties.responses.properties[${m.successCode}]`
      : 'Type.Any()';

    exports.push(`export const ${m.name} = defineEndpoint({
  method: '${m.method}' as const,
  path: '${m.path}',
  params: ${paramsExpr},
  response: ${responseExpr},
})`);
  }

  return exports.join('\n\n');
}

export { generateClientCode };
