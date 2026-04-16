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
import { optimizeContractSourceForKweri } from './lib/kweri-client-generator.js';

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
  // When running from within the kweri package itself (development)
  const cwdPkg = join(process.cwd(), 'package.json');
  if (existsSync(cwdPkg)) {
    try {
      const pkg = JSON.parse(readFileSync(cwdPkg, 'utf-8'));
      if (pkg.name === 'kweri') {
        return process.cwd();
      }
    } catch {}
  }

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

    let specSource = source;

    if (values.bundle) {
      // Run bundling in a child process so module resolution uses kweri's
      // node_modules only. We put the runner inside kweri/node_modules so
      // Node's resolution (walking up from script path) stops at kweri's
      // node_modules. Also set NODE_PATH as fallback for non-bundled installs.
      const kweriNodeModules = join(kweriRealPath, 'node_modules');
      mkdirSync(kweriNodeModules, { recursive: true });
      const bundleRunnerPath = join(
        kweriNodeModules,
        '.kweri-bundle-runner.mjs'
      );
      const bundleRunnerCode = `
import SwaggerParser from '@apidevtools/swagger-parser';
import { writeFileSync } from 'fs';
const [source, outputPath] = process.argv.slice(2);
const spec = await SwaggerParser.bundle(source);
writeFileSync(outputPath, JSON.stringify(spec, null, 0));
`;
      writeFileSync(bundleRunnerPath, bundleRunnerCode);
      const sourceAbs = source.startsWith('http')
        ? source
        : resolve(process.cwd(), source);
      const nodePath = process.env.NODE_PATH
        ? `${kweriNodeModules}${process.platform === 'win32' ? ';' : ':'}${process.env.NODE_PATH}`
        : kweriNodeModules;
      execSync(`node "${bundleRunnerPath}" "${sourceAbs}" "${tempSpecPath}"`, {
        stdio: 'inherit',
        cwd: kweriRealPath,
        env: { ...process.env, NODE_PATH: nodePath }
      });
      specSource = tempSpecPath;
    }

    const typedOpenApiBin = resolveTypedOpenApiBin(kweriRealPath);
    const specSourceAbs =
      specSource.startsWith('http') || specSource.startsWith('/')
        ? specSource
        : resolve(process.cwd(), specSource);
    const kweriNodeModules = join(kweriRealPath, 'node_modules');
    const nodePath = process.env.NODE_PATH
      ? `${kweriNodeModules}${process.platform === 'win32' ? ';' : ':'}${process.env.NODE_PATH}`
      : kweriNodeModules;

    console.log(`🔍 Generating schemas with typed-openapi`);
    execSync(
      `node "${typedOpenApiBin}" "${specSourceAbs}" -o "schemas.ts" -r typebox`,
      {
        stdio: 'inherit',
        cwd: srcDir,
        env: { ...process.env, NODE_PATH: nodePath }
      }
    );

    console.log(`🔧 Optimizing contract source for Kweri`);

    let generatedSource = readFileSync(tempSchemasPath, 'utf-8');
    const optimizedSource = optimizeContractSourceForKweri(generatedSource);

    writeFileSync(tempClientPath, optimizedSource);

    // Remove the raw typed-openapi output — only client.ts should be compiled.
    // tsconfig.generated.json includes *.ts so leaving schemas.ts would cause
    // TypeScript errors from the unpatched TEndpoint constraints.
    unlinkSync(tempSchemasPath);

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

    execSync(`npx tsc --skipLibCheck -p "${tsconfigPath}"`, { stdio: 'inherit' });

    console.log(`🧹 Cleaning up temporary files...`);

    rmSync(srcDir, { recursive: true, force: true });

    if (existsSync(tempSpecPath)) {
      unlinkSync(tempSpecPath);
    }

    const bundleRunnerPath = join(
      kweriRealPath,
      'node_modules',
      '.kweri-bundle-runner.mjs'
    );
    if (existsSync(bundleRunnerPath)) {
      unlinkSync(bundleRunnerPath);
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
