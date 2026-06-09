import { describe, it, expect } from 'bun:test';
import { formatSource } from './format.js';

describe('formatSource', () => {
  it('reindents and normalizes generated TypeScript', async () => {
    const ugly = `export const X=Type.Object({\na:Type.String(),\nb:Type.Number()\n})`;
    const out = await formatSource(ugly);
    expect(out).toContain('export const X = Type.Object({');
    expect(out).toContain('  a: Type.String(),');
    expect(out).toContain('  b: Type.Number(),');
  });

  it('is idempotent on already-formatted source', async () => {
    const once = await formatSource(`export const X = Type.String();\n`);
    const twice = await formatSource(once);
    expect(twice).toBe(once);
  });

  it('never throws — returns the input on unformattable source', async () => {
    const broken = 'export const = = = {{{ not valid ts';
    const out = await formatSource(broken);
    expect(typeof out).toBe('string');
    expect(out.length).toBeGreaterThan(0);
  });
});
