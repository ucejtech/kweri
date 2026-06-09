# kweri

## 0.3.0

### Minor Changes

- [#9](https://github.com/ucejtech/kweri/pull/9) [`d768da1`](https://github.com/ucejtech/kweri/commit/d768da16cea17eaeb21a17816b43075a8ba5ee07) Thanks [@ucejtech](https://github.com/ucejtech)! - Rearchitect OpenAPI code generation.

  **Breaking changes:**

  - `kweri-gen` now writes a single `client.ts` into **your** source tree
    (`--out`, default `src/api/kweri/client.ts`) instead of into
    `node_modules/kweri/.generated/`. Commit it like any other source file.
  - The `kweri/generated` package export has been **removed** — import from your
    generated file instead (e.g. `import { EndpointByMethod } from '@/api/kweri/client'`).
  - `createClient` now takes a `Kweri` instance and routes every call through the
    runtime, so generated clients get caching, request deduplication, and
    stale-while-revalidate. Previously it made raw `fetch` calls that bypassed the
    cache entirely. Migrate `createClient({ baseURL })` → `createClient(kweri)`.
  - The `--bundle` flag is gone; `$ref` pointers are resolved automatically.
  - Use an explicit `gen` script and commit the output instead of a `postinstall`
    hook — the output now lives in your tree and survives reinstalls under npm,
    pnpm, and Yarn PnP.

  **Internal:**

  - Generation is driven by typed-openapi's programmatic API
    (`mapOpenApiEndpoints` + `generateFile`) rather than shelling out to its CLI
    and regex-scraping the output. No more marker slicing, no more `@ts-nocheck` —
    the generated code type-checks cleanly.
  - Removed the install-time `npx tsc` step, temp-dir handling, `node_modules`
    resolution hacks, and the bundle-runner written into `node_modules`. Deleted
    two dead generator modules. Added a generator test suite (IR units, emitter
    snapshots, and a runtime integration test proving the client dedupes and
    caches through kweri).
