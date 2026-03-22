import { describe, it, expect } from 'bun:test'
import { PACKAGE_VERSION } from './version.js'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageJsonPath = join(__dirname, '../package.json')

describe('Package Version', () => {
  it('should match package.json version', () => {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
    expect(PACKAGE_VERSION).toBe(packageJson.version)
  })

  it('should be a valid version string', () => {
    expect(typeof PACKAGE_VERSION).toBe('string')
    expect(PACKAGE_VERSION.length).toBeGreaterThan(0)
    // Basic semver pattern check (like 1.0.0 or 1.2.3-beta.1)
    expect(PACKAGE_VERSION).toMatch(/^\d+\.\d+\.\d+/)
  })
})