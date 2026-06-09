# Releasing

Releases are automated with [release-please](https://github.com/googleapis/release-please).
You never write changeset files, bump the version, or tag by hand. The release
is derived entirely from your **commit messages** (Conventional Commits): merge
to `main`, a bot opens/updates a **release PR**, and merging that PR publishes.

## Commit messages drive the release

Write [Conventional Commits](https://www.conventionalcommits.org/). The prefix
determines whether — and how — the next version bumps:

| Commit prefix | Example | Effect on this `0.x` package |
|---|---|---|
| `fix:` | `fix: handle empty query params` | patch (`0.3.0` → `0.3.1`) |
| `feat:` | `feat: format generated client` | patch (`0.3.0` → `0.3.1`) |
| `feat!:` / `fix!:` / `BREAKING CHANGE:` footer | `feat!: drop kweri/generated export` | minor (`0.3.0` → `0.4.0`) |
| `chore:` `docs:` `refactor:` `test:` `ci:` | `chore: tidy imports` | no release on their own (ride along) |

This matches the project's semver-zero policy: **breaking → minor, everything
else → patch**, configured via `bump-minor-pre-major` + `bump-patch-for-minor-pre-major`
in [`release-please-config.json`](release-please-config.json). Don't cut a
`1.0.0` until you intend to.

> Only `feat`/`fix` (and breaking changes) trigger a release. A batch of pure
> `chore:`/`docs:` commits will **not** open a release PR — that's intended.

## How a release happens

On every push to `main`, [`.github/workflows/publish.yml`](.github/workflows/publish.yml):

1. Runs **release-please**, which scans commits since the last release tag and
   opens/updates a **release PR** that bumps the version in `package.json`,
   updates `CHANGELOG.md`, and (on merge) tags the release.
2. When you **merge the release PR**, the same workflow's `publish` job runs:
   builds and publishes to npm via **trusted publishing (OIDC)** — no token.

To hold a release, just don't merge the release PR; it keeps updating as more
commits land.

## One-time setup (already done, for reference)

- **npm trusted publisher** for `kweri`: owner `ucejtech`, repo `kweri`,
  workflow file `publish.yml`. No `NPM_TOKEN` secret.
- **Repo → Settings → Actions → General → Workflow permissions**: *"Allow GitHub
  Actions to create and approve pull requests"* must be enabled so release-please
  can open the release PR.
- [`.release-please-manifest.json`](.release-please-manifest.json) tracks the
  current released version (`0.3.0`). release-please updates it on each release.

## Rollbacks

You **cannot overwrite or freely delete** a published npm version. `npm unpublish`
is allowed only within **72 hours** and breaks anyone who already installed it.
So a rollback is almost always **dist-tag surgery + roll-forward**, not deletion.

Work top to bottom; stop as soon as the situation is contained.

1. **Move `latest` back to the last good version** (instant; new installs recover
   immediately, nothing is deleted):

   ```bash
   npm dist-tag add kweri@<last-good> latest
   ```

2. **Deprecate the bad version** so anyone pinned to it is warned:

   ```bash
   npm deprecate kweri@<bad> "Broken release — use <last-good>+ instead"
   ```

3. **Roll forward.** Revert the offending commit(s) with a `fix:` commit and let
   the normal flow ship the patch. This is the real remedy — the bad version
   stays on npm but nobody is pointed at it.

4. **Last resort only** — within 72h, for genuinely broken or secret-leaking
   artifacts:

   ```bash
   npm unpublish kweri@<bad>
   ```

   After 72h this is generally not permitted.

> Editing or deleting the **GitHub** Release/tag does **not** change what's on
> npm. Prioritize steps 1–2 (npm dist-tags) when mitigating — that's what users
> actually install.
