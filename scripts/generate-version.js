#!/usr/bin/env node
import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, '../package.json');
const versionFilePath = join(__dirname, '../src/version.ts');

try {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  const version = packageJson.version || '0.0.0';

  const content = `// Auto-generated from package.json - do not edit manually
export const PACKAGE_VERSION = '${version}'
`;

  writeFileSync(versionFilePath, content, 'utf-8');
  console.log(`Generated version.ts with version: ${version}`);
} catch (error) {
  console.error('Failed to generate version.ts:', error.message);
  process.exit(1);
}
