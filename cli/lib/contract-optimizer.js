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

function generateKweriClient(endpoints) {
  const lines = [];
  
  lines.push('// Kweri Client Methods');
  lines.push('import { ApiClient } from "kweri";');
  lines.push('');
  lines.push('export interface ClientConfig {');
  lines.push('  baseURL: string;');
  lines.push('  fetcher?: (options: { method: string; url: string; body?: unknown }) => Promise<Response>;');
  lines.push('}');
  lines.push('');
  lines.push('export class GeneratedClient {');
  lines.push('  private client: ApiClient;');
  lines.push('');
  lines.push('  constructor(config: ClientConfig) {');
  lines.push('    const defaultFetcher = async (options: any) => {');
  lines.push('      return fetch(options.url, {');
  lines.push('        method: options.method,');
  lines.push('        headers: options.body ? { "Content-Type": "application/json" } : {},');
  lines.push('        body: options.body ? JSON.stringify(options.body) : undefined');
  lines.push('      });');
  lines.push('    };');
  lines.push('');
  lines.push('    this.client = new ApiClient(');
  lines.push('      config.baseURL,');
  lines.push('      config.fetcher || defaultFetcher');
  lines.push('    );');
  lines.push('  }');
  lines.push('');

  // Generic methods
  lines.push('  async get(path: string, params?: any): Promise<any> {');
  lines.push('    return this.client.execute({ method: "GET", path, params: params || {} });');
  lines.push('  }');
  lines.push('');
  lines.push('  async post(path: string, params?: any): Promise<any> {');
  lines.push('    return this.client.execute({ method: "POST", path, params: params || {} });');
  lines.push('  }');
  lines.push('');
  lines.push('  async put(path: string, params?: any): Promise<any> {');
  lines.push('    return this.client.execute({ method: "PUT", path, params: params || {} });');
  lines.push('  }');
  lines.push('');
  lines.push('  async patch(path: string, params?: any): Promise<any> {');
  lines.push('    return this.client.execute({ method: "PATCH", path, params: params || {} });');
  lines.push('  }');
  lines.push('');
  lines.push('  async delete(path: string, params?: any): Promise<any> {');
  lines.push('    return this.client.execute({ method: "DELETE", path, params: params || {} });');
  lines.push('  }');

  lines.push('}');
  lines.push('');
  lines.push('export function createClient(config: ClientConfig) {');
  lines.push('  return new GeneratedClient(config);');
  lines.push('}');

  return lines.join('\n');
}

function optimizeContractSource(source) {
  const startMarker = "// <EndpointByMethod>";
  const endMarker = "// </EndpointByMethod.Shorthands>";
  const startIndex = source.indexOf(startMarker);
  const endMarkerIndex = source.indexOf(endMarker);

  if (startIndex === -1 || endMarkerIndex === -1) {
    // If the markers don't exist, add our own structure
    return addKweriClientToSource(source);
  }

  const endIndex = source.indexOf("\n", endMarkerIndex);
  const replaceUntil = endIndex === -1 ? source.length : endIndex + 1;
  const block = source.slice(startIndex, replaceUntil);
  
  if (!/export\s+const\s+EndpointByMethod\s*=/.test(block)) {
    return addKweriClientToSource(source);
  }

  const parsedMethods = new Map();
  let currentMethod = null;
  let inEndpointMap = false;

  for (const line of block.split("\n")) {
    if (!inEndpointMap) {
      if (/export\s+const\s+EndpointByMethod\s*=\s*\{/.test(line)) {
        inEndpointMap = true;
      }
      continue;
    }

    const methodMatch = line.match(/^\s*([a-z]+)\s*:\s*\{\s*$/i);
    if (methodMatch) {
      currentMethod = methodMatch[1].toLowerCase();
      parsedMethods.set(currentMethod, []);
      continue;
    }

    const entryMatch = line.match(/^\s*"(.+)"\s*:\s*([A-Za-z0-9_$.]+),?\s*$/);
    if (entryMatch && currentMethod) {
      parsedMethods.get(currentMethod).push({
        path: entryMatch[1],
        schema: entryMatch[2].replace(/^Endpoints\./, ""),
      });
      continue;
    }

    if (currentMethod && /^\s*},?\s*$/.test(line)) {
      currentMethod = null;
      continue;
    }

    if (!currentMethod && /^\s*}\s*;?\s*$/.test(line)) {
      break;
    }
  }

  // Parse declared endpoint schemas and add missing ones
  for (const endpoint of parseDeclaredEndpointSchemas(source)) {
    const entries = parsedMethods.get(endpoint.method) ?? [];
    const hasEntry = entries.some((entry) => entry.path === endpoint.path);

    if (!hasEntry) {
      entries.push({
        path: endpoint.path,
        schema: endpoint.schema,
      });
      parsedMethods.set(endpoint.method, entries);
    }
  }

  if (parsedMethods.size === 0) {
    return addKweriClientToSource(source);
  }

  const orderedMethods = [
    ...METHOD_ORDER.filter((method) => parsedMethods.has(method)),
    ...Array.from(parsedMethods.keys()).filter(
      (method) => !METHOD_ORDER.includes(method)
    ),
  ].map((method) => ({
    name: method,
    entries: parsedMethods.get(method) ?? [],
  }));

  const replacementLines = [];
  replacementLines.push("// <EndpointByMethod>");

  for (const method of orderedMethods) {
    replacementLines.push(`export type ${toEndpointTypeName(method.name)} = {`);
    for (const entry of method.entries) {
      replacementLines.push(`  "${entry.path}": ${entry.schema};`);
    }
    replacementLines.push("};");
    replacementLines.push("");
  }

  replacementLines.push("export type EndpointByMethod = {");
  for (const method of orderedMethods) {
    replacementLines.push(
      `  ${method.name}: ${toEndpointTypeName(method.name)};`
    );
  }
  replacementLines.push("};");
  replacementLines.push("// </EndpointByMethod>");
  replacementLines.push("");
  replacementLines.push("// </EndpointByMethod.Shorthands>");

  // Add Kweri client
  const allEndpoints = orderedMethods.flatMap(method => 
    method.entries.map(entry => ({
      method: method.name,
      path: entry.path,
      schema: entry.schema
    }))
  );

  const kweriClient = generateKweriClient(allEndpoints);
  replacementLines.push("");
  replacementLines.push(kweriClient);

  const patchedSource = patchTypeBoxStaticConstraints(
    source.slice(0, startIndex) +
    replacementLines.join("\n") +
    "\n" +
    source.slice(replaceUntil)
  );

  return patchedSource;
}

function addKweriClientToSource(source) {
  const endpoints = parseDeclaredEndpointSchemas(source);
  const kweriClient = generateKweriClient(endpoints);
  
  return source + "\n\n" + kweriClient;
}

export {
  optimizeContractSource,
  patchTypeBoxStaticConstraints,
  ensureTypeBoxSchemaImport,
  parseDeclaredEndpointSchemas
};