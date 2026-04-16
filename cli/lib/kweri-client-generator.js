/**
 * Kweri client generator that optimizes typed-openapi output
 * Based on the reference implementation approach
 */

const METHOD_ORDER = ["post", "get", "patch", "delete", "put"];

function toEndpointTypeName(method) {
  return `${method.charAt(0).toUpperCase()}${method.slice(1)}Endpoints`;
}

function ensureTypeBoxSchemaImport(source) {
  return source.replace(
    /import\s*\{([^}]*)\}\s*from\s*"@sinclair\/typebox";/,
    (match, imports) => {
      if (/\bTSchema\b/.test(imports)) {
        return match;
      }

      const normalizedImports = imports
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean);

      normalizedImports.push("TSchema");

      return `import { ${Array.from(new Set(normalizedImports)).join(", ")} } from "@sinclair/typebox";`;
    }
  );
}

function patchTypeBoxStaticConstraints(source) {
  if (!source.includes('from "@sinclair/typebox"')) {
    return source;
  }

  let patched = ensureTypeBoxSchemaImport(source);

  if (!patched.includes("type EndpointParametersOf<TEndpoint extends TSchema>")) {
    patched = patched.replace(
      /type MaybeOptionalArg<T> = RequiredKeys<T> extends never \? \[config\?: T\] : \[config: T\];/,
      (match) =>
        `${match}\n\ntype EndpointParametersOf<TEndpoint extends TSchema> = TEndpoint["static"] extends { parameters: infer TParameters } ? TParameters : never;\ntype EndpointResponseOf<TEndpoint extends TSchema> = TEndpoint["static"] extends { response: infer TResponse } ? TResponse : never;`
    );
  }

  patched = patched.replace(
    /TEndpoint extends\s+([A-Za-z]+Endpoints\[Path\])/g,
    "TEndpoint extends TSchema & $1"
  );

  patched = patched.replace(
    /TEndpoint extends\s+(EndpointByMethod\[TMethod\]\[TPath\])/g,
    "TEndpoint extends TSchema & $1"
  );

  patched = patched.replace(
    /Static<TEndpoint>\["parameters"\]/g,
    "EndpointParametersOf<TEndpoint>"
  );

  patched = patched.replace(
    /Static<TEndpoint>\["response"\]/g,
    "EndpointResponseOf<TEndpoint>"
  );

  return patched;
}

function rewriteGeneratedTypeBoxApiClient(source) {
  const methodConfigs = [
    ["post", "PostEndpoints"],
    ["get", "GetEndpoints"],
    ["put", "PutEndpoints"],
    ["delete", "DeleteEndpoints"],
    ["patch", "PatchEndpoints"],
  ];

  let patched = source;

  for (const [method, alias] of methodConfigs) {
    patched = rewriteBlock(
      patched,
      `// <ApiClient.${method}>`,
      `// </ApiClient.${method}>`,
      (block) => {
        console.log(`🔄 Rewriting ${method} method block`);
        
        // Replace the Static<TEndpoint> usage with direct endpoint access
        let rewritten = block
          .replace(
            /Static<TEndpoint>/g,
            `${alias}[Path]`
          )
          .replace(
            /InferResponseByStatus<Static<TEndpoint>, SuccessStatusCode>/g,
            `${alias}[Path]["responses"][200]`
          )
          .replace(
            /Extract<InferResponseByStatus<Static<TEndpoint>, SuccessStatusCode>, \{ data: \{\} \}>\["data"\]/g,
            `${alias}[Path]["responses"][200]`
          );
        
        return rewritten;
      }
    );
  }

  patched = rewriteBlock(
    patched,
    "// <ApiClient.request>",
    "// </ApiClient.request>",
    (block) => {
      console.log(`🔄 Rewriting request method block`);
      
      let rewritten = block
        .replace(
          /Static<TEndpoint>/g,
          `EndpointByMethod[TMethod][TPath]`
        )
        .replace(
          /InferResponseByStatus<Static<TEndpoint>, SuccessStatusCode>/g,
          `EndpointByMethod[TMethod][TPath]["responses"][200]`
        )
        .replace(
          /Extract<InferResponseByStatus<Static<TEndpoint>, SuccessStatusCode>, \{ data: \{\} \}>\["data"\]/g,
          `EndpointByMethod[TMethod][TPath]["responses"][200]`
        );
      
      return rewritten;
    }
  );

  console.log(`✅ Completed rewriting TypeBox API client`);
  return patched;
}

function rewriteBlock(source, startMarker, endMarker, transform) {
  const startIndex = source.indexOf(startMarker);
  const endIndex = source.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    return source;
  }

  const blockEnd = source.indexOf("\n", endIndex);
  const replaceUntil = blockEnd === -1 ? source.length : blockEnd + 1;
  const block = source.slice(startIndex, replaceUntil);

  return (
    source.slice(0, startIndex) +
    transform(block) +
    source.slice(replaceUntil)
  );
}

function parseDeclaredEndpointSchemas(source) {
  const endpointPattern =
    /export type ([A-Za-z0-9_]+)\s*=\s*Static<\s*typeof \1\s*>;\s*export const \1\s*=\s*Type\.Object\(\{\s*method:\s*Type\.Literal\("([A-Z]+)"\),\s*path:\s*Type\.Literal\("([^"]+)"\),/g;
  const endpoints = [];
  let match;

  while ((match = endpointPattern.exec(source)) !== null) {
    endpoints.push({
      method: match[2].toLowerCase(),
      path: match[3],
      schema: match[1],
    });
  }

  return endpoints;
}




/**
 * Parse TypeBox endpoint schema exports from the generated source.
 * Matches blocks like: export const get__users = Type.Object({ method: Type.Literal("GET"), path: Type.Literal("/users"), ... })
 * Returns [{ schemaName, method, path }]
 */
function parseEndpointSchemas(source) {
  const results = [];
  const constRegex = /export const ([a-z][a-z0-9_]*) = Type\.Object\(\{/g;
  let match;

  while ((match = constRegex.exec(source)) !== null) {
    const schemaName = match[1];
    const snippet = source.slice(match.index, match.index + 500);

    const methodMatch = /method:\s*Type\.Literal\("([A-Z]+)"\)/.exec(snippet);
    if (!methodMatch) continue;

    const pathMatch = /path:\s*Type\.Literal\("([^"]+)"\)/.exec(snippet);
    if (!pathMatch) continue;

    results.push({ schemaName, method: methodMatch[1], path: pathMatch[1] });
  }

  return results;
}

/**
 * Generate method-keyed endpoint maps (GetEndpoints, PostEndpoints, …, EndpointByMethod)
 * for use with createVuePathHooks / createReactPathHooks.
 */
function generateEndpointMethodMap(endpoints) {
  if (endpoints.length === 0) return '';

  const byMethod = {};
  for (const { method, path, schemaName } of endpoints) {
    if (!byMethod[method]) byMethod[method] = [];
    byMethod[method].push({ path, schemaName });
  }

  const lines = [
    '',
    '// Method-keyed endpoint maps — use with createVuePathHooks / createReactPathHooks',
  ];

  const methodNames = Object.keys(byMethod).sort();
  const exportNames = {};

  for (const method of methodNames) {
    const capitalized = method.charAt(0) + method.slice(1).toLowerCase();
    const exportName = `${capitalized}Endpoints`;
    exportNames[method] = exportName;
    const entries = byMethod[method]
      .map(({ path, schemaName }) => `  '${path}': ${schemaName}`)
      .join(',\n');
    lines.push(`export const ${exportName} = {\n${entries}\n}`);
  }

  const methodMapEntries = methodNames
    .map(m => `  ${m}: ${exportNames[m]}`)
    .join(',\n');
  lines.push(`export const EndpointByMethod = {\n${methodMapEntries}\n}`);

  return lines.join('\n') + '\n';
}

function optimizeContractSourceForKweri(source) {
  console.log(`🔧 Applying hybrid optimization: schemas from typed-openapi + clean Kweri client`);
  
  // Find where the problematic client code starts
  const clientStartMarkers = [
    "// <ApiClientTypes>",
    "export type EndpointParameters",
    "export class ApiClient"
  ];
  
  let clientStartIndex = -1;
  for (const marker of clientStartMarkers) {
    const index = source.indexOf(marker);
    if (index !== -1) {
      clientStartIndex = index;
      break;
    }
  }

  let cleanSource;
  if (clientStartIndex !== -1) {
    // Strip out everything from the client code onwards
    console.log(`✂️ Removing problematic client code starting at position ${clientStartIndex}`);
    cleanSource = source.slice(0, clientStartIndex).trim();
  } else {
    console.log(`⚠️ No client code markers found, using full source`);
    cleanSource = source;
  }

  // Add TypeScript ignore directive and replace imports
  cleanSource = '// @ts-nocheck\n' + cleanSource;
  cleanSource = cleanSource.replace(
    /import \{ Type, Static \} from ["']@sinclair\/typebox["'];?/g,
    'import { Type, type Static } from "kweri";'
  );

  // Extract endpoints for Kweri client
  const endpoints = parseDeclaredEndpointSchemas(cleanSource);
  
  if (endpoints.length === 0) {
    console.log(`⚠️ No endpoints found in cleaned source`);
    return cleanSource + '\n\n// No endpoints found for Kweri client generation';
  }

  // Generate clean Kweri client
  const kweriClient = generateKweriClient(endpoints);
  
  console.log(`📋 Generated clean Kweri client with ${endpoints.length} endpoints`);
  
  // Parse endpoint schemas and generate EndpointByMethod map
  const endpointSchemas = parseEndpointSchemas(cleanSource);
  const methodMap = generateEndpointMethodMap(endpointSchemas);

  console.log(`📋 Generated EndpointByMethod map with ${endpointSchemas.length} endpoints`);

  return cleanSource + '\n\n' + kweriClient + '\n' + methodMap;
}

function addKweriClientToOptimizedSource(source) {
  const endpoints = parseDeclaredEndpointSchemas(source);
  const kweriClient = generateKweriClient(endpoints);
  
  // Replace TypeBox imports with Kweri imports
  let processedSource = source.replace(
    /import \{ Type, Static \} from ["']@sinclair\/typebox["'];?/g,
    'import { Type, type Static } from "kweri";'
  );
  
  return processedSource + "\n\n" + kweriClient;
}

function generateKweriClient(endpoints) {
  const lines = [];
  
  lines.push('// Generated Kweri Client Methods');
  lines.push('');
  lines.push('export interface ClientConfig {');
  lines.push('  baseURL?: string;');
  lines.push('  defaultHeaders?: Record<string, string>;');
  lines.push('}');
  lines.push('');
  lines.push('export class GeneratedClient {');
  lines.push('  private baseURL: string;');
  lines.push('  private defaultHeaders: Record<string, string>;');
  lines.push('');
  lines.push('  constructor(config: ClientConfig = {}) {');
  lines.push('    this.baseURL = config.baseURL || "";');
  lines.push('    this.defaultHeaders = config.defaultHeaders || {};');
  lines.push('  }');
  lines.push('');
  lines.push('  private async request(method: string, path: string, options: any = {}) {');
  lines.push('    const url = this.baseURL + path;');
  lines.push('    const headers = { ...this.defaultHeaders, ...options.headers };');
  lines.push('');
  lines.push('    const response = await fetch(url, {');
  lines.push('      method,');
  lines.push('      headers,');
  lines.push('      body: options.body ? JSON.stringify(options.body) : undefined');
  lines.push('    });');
  lines.push('');
  lines.push('    if (!response.ok) {');
  lines.push('      throw new Error(`HTTP ${response.status}: ${response.statusText}`);');
  lines.push('    }');
  lines.push('');
  lines.push('    return response.json();');
  lines.push('  }');
  lines.push('');
  
  // Generate clean method shortcuts
  lines.push('  // Generic methods');
  lines.push('  async get(path: string, params?: any) {');
  lines.push('    let url = path;');
  lines.push('    if (params && Object.keys(params).length > 0) {');
  lines.push('      const query = new URLSearchParams(params).toString();');
  lines.push('      url += `?${query}`;');
  lines.push('    }');
  lines.push('    return this.request("GET", url);');
  lines.push('  }');
  lines.push('');
  lines.push('  async post(path: string, body?: any) {');
  lines.push('    return this.request("POST", path, { body });');
  lines.push('  }');
  lines.push('');
  lines.push('  async put(path: string, body?: any) {');
  lines.push('    return this.request("PUT", path, { body });');
  lines.push('  }');
  lines.push('');
  lines.push('  async patch(path: string, body?: any) {');
  lines.push('    return this.request("PATCH", path, { body });');
  lines.push('  }');
  lines.push('');
  lines.push('  async delete(path: string) {');
  lines.push('    return this.request("DELETE", path);');
  lines.push('  }');

  lines.push('}');
  lines.push('');
  lines.push('export function createClient(config?: ClientConfig) {');
  lines.push('  return new GeneratedClient(config);');
  lines.push('}');

  return lines.join('\n');
}


export {
  optimizeContractSourceForKweri,
  addKweriClientToOptimizedSource,
  parseDeclaredEndpointSchemas,
  parseEndpointSchemas,
  generateKweriClient,
  generateEndpointMethodMap,
  patchTypeBoxStaticConstraints,
  ensureTypeBoxSchemaImport,
  rewriteGeneratedTypeBoxApiClient,
  rewriteBlock
};