/**
 * Emit a typed client whose every method routes through the kweri runtime —
 * `kweri.query` for GETs (cache + stale-while-revalidate + dedup) and
 * `kweri.mutate` for writes. This replaces the previous raw-`fetch` client that
 * bypassed the runtime entirely.
 *
 * Param/return types come from the per-endpoint TypeBox schemas emitted by the
 * contract (`Static<typeof get_ListUsers>[...]`). At runtime we build a minimal
 * `Endpoint` with `Type.Any()`/`Type.Unknown()` so kweri skips strict
 * validation on this path — matching the established behaviour of the path
 * hooks (see `createReactPathHooks`).
 */

/** Pure: build the runtime-`Endpoint` factory shared by every method. */
function emitEndpointHelper() {
  return [
    'function __endpoint(method: string, path: string): Endpoint {',
    "  return { method: method as Endpoint['method'], path, params: Type.Any(), response: Type.Unknown() }",
    '}'
  ].join('\n');
}

/** Pure: emit one client method for a normalized IR endpoint. */
export function emitMethod(e) {
  const httpMethod = e.method.toUpperCase();
  const call = e.isQuery ? 'query' : 'mutate';
  const endpointExpr = `__endpoint('${httpMethod}', '${e.path}')`;
  const responseType =
    e.successCode != null
      ? `Static<typeof ${e.schemaName}>['responses'][${e.successCode}]`
      : 'unknown';

  if (!e.hasParameters) {
    return [
      `  async ${e.methodName}(): Promise<${responseType}> {`,
      `    return this.kweri.${call}(${endpointExpr}, {}) as Promise<${responseType}>`,
      `  }`
    ].join('\n');
  }

  const paramsType = `Static<typeof ${e.schemaName}>['parameters']`;
  const defaultArg = e.parametersRequired ? '' : ' = {} as ' + paramsType;
  return [
    `  async ${e.methodName}(params: ${paramsType}${defaultArg}): Promise<${responseType}> {`,
    `    return this.kweri.${call}(${endpointExpr}, params as any) as Promise<${responseType}>`,
    `  }`
  ].join('\n');
}

/** Pure: emit the full client section from normalized IR endpoints. */
export function emitClient(endpoints) {
  const methods = endpoints.map(emitMethod).join('\n\n');

  return [
    '// ---------------------------------------------------------------------------',
    '// Kweri-routed client — every call goes through the kweri runtime',
    '// (cache, stale-while-revalidate, request deduplication).',
    '// ---------------------------------------------------------------------------',
    '',
    emitEndpointHelper(),
    '',
    'export class GeneratedClient {',
    '  constructor(private kweri: Kweri) {}',
    '',
    methods,
    '}',
    '',
    'export function createClient(kweri: Kweri): GeneratedClient {',
    '  return new GeneratedClient(kweri)',
    '}'
  ].join('\n');
}
