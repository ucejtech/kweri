# Changelog

## 0.2.0 — Codegen rearchitecture

> **Breaking change.** `kweri-gen` now writes into your own source tree and the
> generated client routes through the kweri runtime.

### Breaking

- **Generated output now lands in your source tree.** `kweri-gen` writes a
  single `client.ts` to `--out` (default `src/api/kweri/client.ts`) in your
  project, instead of into `node_modules/kweri/.generated/`. Commit it like any
  other source file; your own build compiles it.
- **The `kweri/generated` package export has been removed.** Import from your
  generated file instead:

  ```diff
  - import { EndpointByMethod } from 'kweri/generated'
  + import { EndpointByMethod } from '@/api/kweri/client'
  ```

- **`createClient` now routes every call through kweri.** The previous generated
  client made raw `fetch` calls that bypassed the cache entirely. It now takes a
  `Kweri` instance and benefits from caching, request deduplication, and
  stale-while-revalidate:

  ```diff
  - const api = createClient({ baseURL: 'https://api.example.com' })
  + const kweri = new Kweri({ baseURL: 'https://api.example.com' })
  + const api = createClient(kweri)
  ```

- **The `--bundle` flag is gone.** External and internal `$ref` pointers are now
  resolved automatically on every run.
- **Stop using `postinstall`.** Run `kweri-gen` as an explicit `gen` script and
  commit the result. Writing into your own tree means the output survives
  reinstalls and works under npm, pnpm, and Yarn PnP.

### Migration

1. Replace any `"postinstall": "kweri-gen <spec>"` with
   `"gen": "kweri-gen <spec> --out src/api/kweri"` and run it once.
2. Update imports from `kweri/generated` to your generated path
   (e.g. `@/api/kweri/client`).
3. Pass a `Kweri` instance to `createClient(kweri)`.
4. Commit `src/api/kweri/client.ts`.

### Internal

- Generation is now driven by typed-openapi's **programmatic** API
  (`mapOpenApiEndpoints` + `generateFile`) rather than shelling out to its CLI
  and regex-scraping the text output. No more marker-comment slicing, no more
  `@ts-nocheck` on generated code — the output type-checks cleanly.
- Removed the install-time `npx tsc` step, the temp-dir dance, the
  `node_modules` resolution hackery, and the bundle-runner written into
  `node_modules`.
- Deleted two dead, unreferenced generator modules and their duplicated helpers.
- Added a test suite for the generator (IR unit tests, emitter snapshots, and a
  runtime integration test proving the client dedupes and caches through kweri).
