# kweri

## [0.4.2](https://github.com/ucejtech/kweri/compare/kweri-v0.4.1...kweri-v0.4.2) (2026-06-09)


### Features

* multi-instance factory, per-query cache options, auto GC, share… ([648d065](https://github.com/ucejtech/kweri/commit/648d065c4e82c59ce7a5a501de498d9301b5ed48))
* multi-instance factory, per-query cache options, auto GC, shared devtools ([dc3ebc4](https://github.com/ucejtech/kweri/commit/dc3ebc468982b01bbcfe1182cd04d080db3c3696))

## [0.4.1](https://github.com/ucejtech/kweri/compare/kweri-v0.4.0...kweri-v0.4.1) (2026-06-09)


### Bug Fixes

* erasable syntax in generated client code ([e02be84](https://github.com/ucejtech/kweri/commit/e02be8410a48a8826df3cde21701b355e4b4004a))
* erasable syntax in generated client code ([f79d1e8](https://github.com/ucejtech/kweri/commit/f79d1e892da3d76a920950cf969354e9c8b4afa7))

## [0.4.0](https://github.com/ucejtech/kweri/compare/kweri-v0.3.0...kweri-v0.4.0) (2026-06-09)


### ⚠ BREAKING CHANGES

* `kweri-gen` now generates clients in your source tree (default: `src/api/kweri/client.ts`) instead of `node_modules/kweri/.generated/`. Update imports accordingly.

### Features

* add Dockerfile for mintlify build and serve configuration ([60fd250](https://github.com/ucejtech/kweri/commit/60fd2500ffc51ca225118a84f83be798f75ff5de))
* add formatSource function for formatting generated TypeScript a… ([de5e85c](https://github.com/ucejtech/kweri/commit/de5e85c2fabab299a7053fe1d398912d4b71a55b))
* add formatSource function for formatting generated TypeScript and corresponding tests ([4e475cd](https://github.com/ucejtech/kweri/commit/4e475cd03a251d62086800e17a6751b005f874f3))
* add GitHub Actions workflow for publishing to npm ([934754d](https://github.com/ucejtech/kweri/commit/934754dec9d5c2b2dafb0b3f29dd7dea4ee36106))
* add installation and introduction documentation ([71b4bdf](https://github.com/ucejtech/kweri/commit/71b4bdfde6adea852affd732cab51ccf7f25aea2))
* add railway configuration file for deployment and build settings ([c7ddb36](https://github.com/ucejtech/kweri/commit/c7ddb36fb9d005a2e7a8c0aa444158e2405eb498))
* add step to set version from tag in publish workflow ([3b444dd](https://github.com/ucejtech/kweri/commit/3b444dd96a89f8561b6fc23eda3967acb47febda))
* add version generation step to GitHub Actions workflow ([2197588](https://github.com/ucejtech/kweri/commit/21975882e1c049ec49e0b01b043d5004e3e46080))
* add version generation step to test workflow ([a26ce4d](https://github.com/ucejtech/kweri/commit/a26ce4d629cb58037a1b770a2ceea55cb116d9a4))
* adds cache store, cleanup cache-entry ([a848513](https://github.com/ucejtech/kweri/commit/a848513b6d71fb418fef5cace158f8bc68ffa78d))
* adds cache store, cleanup cache-entry ([c93953d](https://github.com/ucejtech/kweri/commit/c93953d7225fa17f83eb21e61ff3eb48d7d8a5ce))
* enhance cache store functionality and improve entry management ([41d8f3e](https://github.com/ucejtech/kweri/commit/41d8f3e616243f2c10808dd1321bd606b1227300))
* implement kweri API client generation and enhance project structure ([b04908b](https://github.com/ucejtech/kweri/commit/b04908b1f51e6485bc32fb9c8f216436993a3fed))
* optimize cache entry retrieval and enhance error handling ([6111aab](https://github.com/ucejtech/kweri/commit/6111aab4a78f3e76960f16ddf37f0053f0f8fb69))
* rearchitect code generation to write OpenAPI clients into source tree ([145f02a](https://github.com/ucejtech/kweri/commit/145f02a6a1b06f0eced9e1b409028539122721b1))
* rearchitect OpenAPI code generation with breaking changes ([d768da1](https://github.com/ucejtech/kweri/commit/d768da16cea17eaeb21a17816b43075a8ba5ee07))


### Bug Fixes

* add logo configuration to docs.json ([74eccef](https://github.com/ucejtech/kweri/commit/74eccefee52e57209376d0ed65f3d1afadaa8cb8))
* add logo configuration to docs.json ([499081d](https://github.com/ucejtech/kweri/commit/499081d660bcd3082f57b538612cc64cd8a6913f))
* add repository, homepage, and bugs fields to package.json ([3feef3e](https://github.com/ucejtech/kweri/commit/3feef3ebc8544cbfbbd300308a20b31ef85ba327))
* add repository, homepage, and bugs fields to package.json ([8f8281b](https://github.com/ucejtech/kweri/commit/8f8281b16d8ae6b46bf41095b2b3a3169f230d19))
* add version generation step before running tests in publish work… ([54caa0f](https://github.com/ucejtech/kweri/commit/54caa0f4919cdc51992962767fc61c664a2957b5))
* add version generation step before running tests in publish workflow ([35f49a8](https://github.com/ucejtech/kweri/commit/35f49a8a7af512a3561d8591eb7b8742e97502a7))
* add vue as a devDependency in package.json ([538aa6e](https://github.com/ucejtech/kweri/commit/538aa6e9f38632cc88161e286c6350e7a3f7e36a))
* add vue as a devDependency in package.json ([1378950](https://github.com/ucejtech/kweri/commit/1378950d5b6063b237ae1aa8845d47ffa76bc82f))
* change executeQuery to non-async in Vue adapter to avoid unhandled promise rejections ([4cb56d4](https://github.com/ucejtech/kweri/commit/4cb56d4514c95e5a4ada989bf2e10884b12eadb5))
* correct path for kweri-gen in package.json and add .npmignore for generator artifacts ([e19e90f](https://github.com/ucejtech/kweri/commit/e19e90f8d9518ebf17176d2fecb44dc8738adc3f))
* remove strict response validatio and support auto ref unwrapping in templates for vue. ([88405d5](https://github.com/ucejtech/kweri/commit/88405d5126cd8c19fa24a7eb89de5fa0ac3859d0))
* remove strict response validatio and support auto ref unwrapping… ([38f7228](https://github.com/ucejtech/kweri/commit/38f7228651e024ed8575ea84a1601e205d9262e2))
* update build and start commands in railway configuration for consistency ([d38b3fc](https://github.com/ucejtech/kweri/commit/d38b3fcc1578874665c1f05d0879996fb2385890))
* update Dockerfile to streamline mintlify installation and configure Nginx for serving ([87cc42e](https://github.com/ucejtech/kweri/commit/87cc42e652daf3cf7069cda43a7c0ccb5cf2dfdf))
* update Dockerfile to use 'mintlify export' instead of 'mintlify build' ([f576b9f](https://github.com/ucejtech/kweri/commit/f576b9fcc32f59a881ef6b24cbf1c92e245c902a))
* update documentation link to new URL ([60368d1](https://github.com/ucejtech/kweri/commit/60368d15685ed98502b96d149c4eec36ae62fa50))
* update documentation link to new URL ([1dbbc78](https://github.com/ucejtech/kweri/commit/1dbbc78b656fe4a93923d4d7d250c593b47b940a))
* update import path for generated client in README ([a03cc73](https://github.com/ucejtech/kweri/commit/a03cc731a4819f97e2fbe23e51dea4733dab2186))
* update publish workflow to include permissions and upgrade npm ([209063f](https://github.com/ucejtech/kweri/commit/209063fee4474eea69bc8cccd9caed8118fc8c0c))
* update publish workflow to include permissions and upgrade npm ([25b8eba](https://github.com/ucejtech/kweri/commit/25b8eba98544b5ceac92da391b10016086939701))
* update versioning logic in publish workflow and correct version in package.json ([92f37e5](https://github.com/ucejtech/kweri/commit/92f37e58f116f3ca741469cec90d6da7965c68e8))

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
