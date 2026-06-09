import { describe, it, expect, beforeAll, afterAll } from 'bun:test';
import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { buildIR } from './ir.js';
import { emitContract } from './emit-contract.js';
import { emitClient } from './emit-client.js';

/**
 * Proves the generated client routes through the kweri runtime — i.e. it
 * benefits from request deduplication and stale-while-revalidate caching,
 * rather than calling fetch directly (the old behaviour).
 *
 * We generate the client, repoint its `from "kweri"` import at the local
 * source, write it next to this test, and import it with bun.
 */

const FIXTURE = new URL('./__fixtures__/sample-spec.json', import.meta.url)
  .pathname;
const OUT = join(dirname(new URL(import.meta.url).pathname), '__generated__', 'client.ts');

let createClient: any;
let Kweri: any;

beforeAll(async () => {
  const { mapped, endpoints } = await buildIR(FIXTURE);
  const source = `${emitContract(mapped)}\n\n${emitClient(endpoints)}\n`
    // Repoint the package import at local source so bun can resolve it.
    .replace(/from "kweri";/, 'from "../../../src/index.js";');

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, source, 'utf-8');

  ({ createClient } = await import(OUT));
  ({ Kweri } = await import('../../src/index.js'));
});

afterAll(() => {
  rmSync(dirname(OUT), { recursive: true, force: true });
});

describe('generated client routes through kweri', () => {
  it('deduplicates concurrent identical GETs into one fetch', async () => {
    let fetchCount = 0;
    const kweri = new Kweri({
      baseURL: 'https://api.test',
      staleTime: 60_000,
      fetcher: async () => {
        fetchCount++;
        return { json: async () => ({ id: '1', name: 'Ada' }) };
      }
    });
    const api = createClient(kweri);

    const [a, b] = await Promise.all([
      api.getUser({ path: { id: '1' } }),
      api.getUser({ path: { id: '1' } })
    ]);

    expect(a).toEqual({ id: '1', name: 'Ada' });
    expect(b).toEqual({ id: '1', name: 'Ada' });
    expect(fetchCount).toBe(1); // deduped
    kweri.destroy();
  });

  it('serves a fresh second call from cache (no second fetch)', async () => {
    let fetchCount = 0;
    const kweri = new Kweri({
      baseURL: 'https://api.test',
      staleTime: 60_000,
      fetcher: async () => {
        fetchCount++;
        return { json: async () => ({ id: '2', name: 'Linus' }) };
      }
    });
    const api = createClient(kweri);

    await api.getUser({ path: { id: '2' } });
    await api.getUser({ path: { id: '2' } });

    expect(fetchCount).toBe(1); // cached
    kweri.destroy();
  });

  it('builds the URL with path params via the runtime', async () => {
    let seenUrl = '';
    const kweri = new Kweri({
      baseURL: 'https://api.test',
      fetcher: async (opts: any) => {
        seenUrl = opts.url;
        return { json: async () => ({ id: '9', name: 'Grace' }) };
      }
    });
    const api = createClient(kweri);

    await api.getUser({ path: { id: '9' } });
    expect(seenUrl).toBe('https://api.test/users/9');
    kweri.destroy();
  });
});
