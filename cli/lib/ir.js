import SwaggerParser from '@apidevtools/swagger-parser';
import { mapOpenApiEndpoints } from 'typed-openapi';

/**
 * Intermediate representation for the kweri generator.
 *
 * The heavy lifting — dereferencing $refs and converting OpenAPI component
 * schemas into TypeBox — is delegated to typed-openapi's *programmatic* API
 * (`mapOpenApiEndpoints`). We do NOT scrape its text output. From the
 * structured `endpointList` we derive a small, stable shape that the emitters
 * consume.
 */

/** HTTP methods kweri's runtime + adapters support. Others are skipped. */
export const SUPPORTED_METHODS = new Set([
  'get',
  'post',
  'put',
  'patch',
  'delete'
]);

/** Methods that go through kweri's cacheable query path; the rest are mutations. */
const QUERY_METHODS = new Set(['get']);

/**
 * Turn a typed-openapi alias (e.g. "get_ListUsers") into a clean camelCase
 * method name ("listUsers"). Pure.
 */
export function aliasToMethodName(alias) {
  const withoutPrefix = alias.replace(
    /^(get|post|put|patch|delete|head|options)_/i,
    ''
  );
  const base = withoutPrefix || alias;
  const parts = base.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  if (parts.length === 0) return alias;
  const [first, ...rest] = parts;
  return (
    first.charAt(0).toLowerCase() +
    first.slice(1) +
    rest.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')
  );
}

/** Pick the lowest 2xx response code as the success code, or null. Pure. */
export function pickSuccessCode(responseCodes) {
  if (!responseCodes) return null;
  const success = responseCodes
    .map(String)
    .filter((c) => /^2\d\d$/.test(c))
    .sort();
  return success.length ? Number(success[0]) : null;
}

/**
 * Normalize typed-openapi's `endpointList` into the IR the emitters use. Pure.
 * `schemaName` deliberately equals `meta.alias` so it matches the `export const`
 * name that `generateFile` emits for the same endpoint.
 */
export function normalizeEndpoints(endpointList) {
  const usedNames = new Map();
  const endpoints = [];
  const skipped = [];

  for (const e of endpointList) {
    const method = e.method.toLowerCase();
    if (!SUPPORTED_METHODS.has(method)) {
      skipped.push(`${method.toUpperCase()} ${e.path}`);
      continue;
    }

    let methodName = aliasToMethodName(e.meta.alias);
    // Deterministic de-collision: append an incrementing suffix.
    if (usedNames.has(methodName)) {
      const n = usedNames.get(methodName) + 1;
      usedNames.set(methodName, n);
      methodName = `${methodName}${n}`;
    } else {
      usedNames.set(methodName, 1);
    }

    endpoints.push({
      method,
      path: e.path,
      schemaName: e.meta.alias,
      methodName,
      hasParameters: !!e.meta.hasParameters,
      parametersRequired: !!e.meta.areParametersRequired,
      isQuery: QUERY_METHODS.has(method),
      successCode: pickSuccessCode(
        e.responses ? Object.keys(e.responses) : null
      )
    });
  }

  return { endpoints, skipped };
}

/**
 * Build the full IR from a spec source (URL or file path).
 * `bundle` resolves external $refs while preserving internal component refs so
 * they become named TypeBox exports (User, NewUser, …) rather than being inlined.
 */
export async function buildIR(source) {
  const doc = await SwaggerParser.bundle(source);
  const mapped = mapOpenApiEndpoints(doc);
  const { endpoints, skipped } = normalizeEndpoints(mapped.endpointList);
  return { mapped, endpoints, skipped };
}
