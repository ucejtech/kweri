import { prettify } from 'typed-openapi/pretty';

/**
 * Format generated TypeScript with oxfmt (bundled with typed-openapi).
 * Best-effort: formatting is cosmetic, so any failure falls back to the
 * unformatted source rather than aborting generation.
 */
export async function formatSource(source) {
  try {
    return await prettify(source, { filePath: 'client.ts' });
  } catch {
    return source;
  }
}
