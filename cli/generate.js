#!/usr/bin/env node

import { parseArgs } from 'util';
import { execSync } from 'child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
  unlinkSync,
  realpathSync
} from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { generateClientCode } from './lib/client-generator.js';

const { values, positionals } = parseArgs({
  args: process.argv.slice(2),
  options: {
    bundle: {
      type: 'boolean',
      short: 'b',
      description:
        'Bundle $refs before generating (fixes "normalized" errors with complex specs)'
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
  -b, --bundle          Bundle $refs first (fixes errors with complex specs)
  -h, --help            Show this help message

Examples:
  kweri-gen https://api.example.com/openapi.json
  kweri-gen ./openapi.json
  kweri-gen https://petstore3.swagger.io/api/v3/openapi.json --bundle

Generated client usage (both styles supported):
  import { createClient } from 'kweri'

  const api = createClient({ baseURL: 'https://api.example.com' })

  // Generic methods
  await api.get('/users/{id}', { path: { id: '123' } })
  
  // Explicit methods
  await api.getUser({ id: '123' })

Note: Add to package.json scripts for auto-regeneration:
  "postinstall": "kweri-gen https://api.example.com/openapi.json"
`);
  process.exit(0);
}

const source = positionals[0];

function findKweriPackagePath() {
  let current = process.cwd();
  const maxDepth = 10;
  let depth = 0;

  while (depth < maxDepth) {
    const kweriPath = join(current, 'node_modules', 'kweri');
    if (existsSync(kweriPath)) {
      return kweriPath;
    }

    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
    depth++;
  }

  return null;
}

function resolveTypedOpenApiBin(kweriPath) {
  const paths = [
    join(kweriPath, 'node_modules', 'typed-openapi', 'bin.js'),
    join(process.cwd(), 'node_modules', 'typed-openapi', 'bin.js'),
    join(dirname(kweriPath), 'typed-openapi', 'bin.js')
  ];

  for (const binPath of paths) {
    if (existsSync(binPath)) {
      return binPath;
    }
  }

  try {
    const modulePath = import.meta.resolve('typed-openapi');
    const moduleDir = dirname(fileURLToPath(modulePath));
    const binPath = join(moduleDir, 'bin.js');
    if (existsSync(binPath)) {
      return binPath;
    }
  } catch {}

  throw new Error(
    'typed-openapi not found. Ensure it is installed as a dependency.'
  );
}

async function main() {
  try {
    console.log(`🔍 Loading OpenAPI spec from: ${source}`);

    if (!source.startsWith('http://') && !source.startsWith('https://')) {
      if (!existsSync(source)) {
        throw new Error(`File not found: ${source}`);
      }
    }

    const kweriPath = findKweriPackagePath();
    if (!kweriPath) {
      throw new Error(
        'kweri package not found in node_modules. Ensure kweri is installed.'
      );
    }

    const kweriRealPath = realpathSync(kweriPath);
    console.log(`📦 Found kweri package at: ${kweriRealPath}`);

    const srcDir = join(kweriRealPath, '.kweri-temp');
    const generatedDir = join(kweriRealPath, '.generated');

    if (existsSync(srcDir)) {
      rmSync(srcDir, { recursive: true, force: true });
    }
    mkdirSync(srcDir, { recursive: true });

    const tempSchemasPath = join(srcDir, 'schemas.ts');
    const tempClientPath = join(srcDir, 'client.ts');
    const tempSpecPath = join(srcDir, 'spec.tmp.json');

    let spec;
    let specSource = source;

    if (values.bundle) {
      const SwaggerParser = (await import('@apidevtools/swagger-parser'))
        .default;
      spec = await SwaggerParser.bundle(source);
      writeFileSync(tempSpecPath, JSON.stringify(spec, null, 0));
      specSource = tempSpecPath;
    } else {
      if (source.startsWith('http://') || source.startsWith('https://')) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30000);
        try {
          const response = await fetch(source, { signal: controller.signal });
          clearTimeout(timeout);
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          spec = await response.json();
        } catch (err) {
          if (err instanceof Error) {
            if (err.name === 'AbortError') {
              throw new Error(
                `Timeout fetching ${source} (30s). Check network or try a local file.`
              );
            }
            throw new Error(`Failed to fetch OpenAPI spec: ${err.message}`);
          }
          throw err;
        }
      } else {
        const content = readFileSync(source, 'utf-8');
        spec = JSON.parse(content);
      }
    }

    const typedOpenApiBin = resolveTypedOpenApiBin(kweriRealPath);
    const cwd = process.cwd();

    try {
      process.chdir(srcDir);
      execSync(
        `node "${typedOpenApiBin}" "${specSource}" -o "schemas.ts" -r typebox`,
        { stdio: 'inherit' }
      );
    } finally {
      process.chdir(cwd);
    }

    console.log(`🔧 Generating typed client`);

    let schemas = readFileSync(tempSchemasPath, 'utf-8');

    schemas = schemas.replace(
      /import \{ Type, Static \} from ["']@sinclair\/typebox["'];?/g,
      'import { Type } from "@sinclair/typebox";\nimport type { Static } from "@sinclair/typebox";'
    );

    const lines = schemas.split('\n');
    const schemasOnly = [];
    let inClientCode = false;

    for (const line of lines) {
      if (
        line.includes('export type MaybeOptionalArg') ||
        line.includes('export type Fetcher') ||
        line.includes('export class ApiClient') ||
        line.includes('export function createApiClient')
      ) {
        inClientCode = true;
      }

      if (!inClientCode) {
        schemasOnly.push(line);
      }
    }

    const cleanSchemas = schemasOnly.join('\n').trim();

    const clientCode = generateClientCode(
      spec,
      cleanSchemas,
      tempClientPath,
      process.cwd()
    );

    writeFileSync(tempClientPath, clientCode);

    if (existsSync(generatedDir)) {
      console.log(`🧹 Cleaning up old generated files`);
      rmSync(generatedDir, { recursive: true, force: true });
    }
    mkdirSync(generatedDir, { recursive: true });

    console.log(`📦 Compiling to JavaScript...`);

    const tsconfigPath = join(kweriRealPath, 'tsconfig.generated.json');
    if (!existsSync(tsconfigPath)) {
      throw new Error(`tsconfig.generated.json not found at ${tsconfigPath}`);
    }

    execSync(`npx tsc --noCheck -p "${tsconfigPath}"`, { stdio: 'inherit' });

    console.log(`🧹 Cleaning up temporary files...`);

    rmSync(srcDir, { recursive: true, force: true });

    if (existsSync(tempSpecPath)) {
      unlinkSync(tempSpecPath);
    }

    console.log(`✅ Successfully generated client`);

    console.log(`\n
📦 Import in your code:
import { createClient } from 'kweri';
  
const api = createClient({ baseURL: 'https://api.example.com' });
  
// Generic methods
await api.get('/users/{id}', { path: { id: '123' } });
  
// Explicit methods
await api.getUser({ id: '123' });


💡 Tip: Add to package.json for auto-regeneration:
"postinstall": "kweri-gen ${source}"
    `);
  } catch (error) {
    console.error(`❌ Error:`, error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
