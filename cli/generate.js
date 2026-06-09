#!/usr/bin/env node

import { parseArgs } from 'util';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { buildIR } from './lib/ir.js';
import { emitContract } from './lib/emit-contract.js';
import { emitClient } from './lib/emit-client.js';
import { formatSource } from './lib/format.js';

const { values, positionals } = parseArgs({
  args: process.argv.slice(2),
  options: {
    out: {
      type: 'string',
      short: 'o',
      default: 'src/api/kweri'
    },
    help: {
      type: 'boolean',
      short: 'h'
    }
  },
  allowPositionals: true
});

if (values.help || positionals.length === 0) {
  console.log(`
Usage: kweri-gen <openapi-url-or-file> [options]

Options:
  -o, --out <dir>   Output directory for the generated client (default: src/api/kweri)
  -h, --help        Show this help message

Examples:
  kweri-gen https://api.example.com/openapi.json
  kweri-gen ./openapi.json --out src/generated

The generated client.ts is written into YOUR source tree and compiled by your
own build. Commit it like any other source file.

Generated usage:
  import { Kweri } from 'kweri'
  import { createClient, EndpointByMethod } from './api/kweri/client'

  const kweri = new Kweri({ baseURL: 'https://api.example.com' })

  // Typed client — every call is cached / deduped via kweri:
  const api = createClient(kweri)
  await api.getUser({ path: { id: '123' } })

  // Or path-based hooks (React/Vue):
  //   createReactPathHooks(useSyncExternalStore, kweri, EndpointByMethod)
`);
  process.exit(0);
}

const source = positionals[0];

async function main() {
  try {
    const isUrl =
      source.startsWith('http://') || source.startsWith('https://');
    if (!isUrl && !existsSync(source)) {
      throw new Error(`File not found: ${source}`);
    }

    console.log(`🔍 Loading OpenAPI spec from: ${source}`);
    const { mapped, endpoints, skipped } = await buildIR(source);

    if (skipped.length > 0) {
      console.log(
        `⚠️  Skipped ${skipped.length} unsupported endpoint(s): ${skipped.join(', ')}`
      );
    }

    console.log(`🔧 Generating contract + Kweri-routed client`);
    const contract = emitContract(mapped);
    const client = emitClient(endpoints);
    const output = await formatSource(`${contract}\n\n${client}\n`);

    const outDir = resolve(process.cwd(), values.out);
    const outFile = resolve(outDir, 'client.ts');
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, output, 'utf-8');

    console.log(
      `✅ Generated ${endpoints.length} endpoint(s) → ${outFile}`
    );
    console.log(`\n📦 Import in your code:
  import { Kweri } from 'kweri'
  import { createClient, EndpointByMethod } from '${values.out.replace(/^src\//, '@/').replace(/\/$/, '')}/client'

  const kweri = new Kweri({ baseURL: 'https://api.example.com' })
  const api = createClient(kweri)

💡 Tip: add a script instead of postinstall, and commit the output:
  "scripts": { "gen": "kweri-gen ${source} --out ${values.out}" }
`);
  } catch (error) {
    console.error(`❌ Error:`, error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
