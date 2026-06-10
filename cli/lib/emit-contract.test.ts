import { describe, it, expect } from 'bun:test';
import { rewriteImports, emitContract } from './emit-contract.js';
import { buildIR } from './ir.js';

const FIXTURE = new URL('./__fixtures__/sample-spec.json', import.meta.url)
  .pathname;

describe('rewriteImports', () => {
  it('rewrites the typebox import to kweri', () => {
    const src = "  import { Type, Static } from '@sinclair/typebox'\n\nexport const X = 1";
    const out = rewriteImports(src);
    expect(out).toContain(
      'import { Type, type Static, type Endpoint, type Kweri } from "kweri";'
    );
    expect(out).not.toContain('@sinclair/typebox');
  });
});

describe('emitContract (integration with typed-openapi)', () => {
  it('emits schemas + EndpointByMethod, no client, no @ts-nocheck', async () => {
    const { mapped } = await buildIR(FIXTURE);
    const out = emitContract(mapped);

    expect(out).not.toContain('@ts-nocheck');
    expect(out).not.toContain('@sinclair/typebox');
    expect(out).not.toContain('__ENDPOINTS_'); // dead marker decls stripped
    expect(out).toContain('export const EndpointByMethod');
    expect(out).toContain('export const get_ListUsers');
    expect(out).toContain('export const User');
    // includeClient:false — typed-openapi must not emit its own ApiClient.
    expect(out).not.toContain('class ApiClient');
    expect(out).toMatchSnapshot();
  });
});
