import { generateFile } from 'typed-openapi';

/**
 * The import line `generateFile` emits at the top of its TypeBox output.
 * We rewrite it to pull `Type`/`Static` from kweri's re-export and to add the
 * `Endpoint`/`Kweri` types the generated client needs. This is a single
 * deterministic replacement — not a scrape of the generated source.
 */
const KWERI_IMPORT =
  'import { Type, type Static, type Endpoint, type Kweri } from "kweri";';

const TYPEBOX_IMPORT_RE =
  /import\s*\{[^}]*\}\s*from\s*['"]@sinclair\/typebox['"];?/;

/** Pure: rewrite the TypeBox import to kweri's. */
export function rewriteImports(source) {
  return source.replace(TYPEBOX_IMPORT_RE, KWERI_IMPORT);
}

/**
 * Emit the contract section: component schemas, per-endpoint schemas, and the
 * `EndpointByMethod` map — produced natively by typed-openapi with
 * `includeClient: false` (no client, no `@ts-nocheck`, no marker-slicing).
 *
 * @param {ReturnType<import('typed-openapi').mapOpenApiEndpoints>} mapped
 */
export function emitContract(mapped) {
  const raw = generateFile({
    ...mapped,
    runtime: 'typebox',
    includeClient: false
  });
  return rewriteImports(raw).trimEnd();
}
