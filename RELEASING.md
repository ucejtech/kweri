# Releasing

Releases are automated with [Changesets](https://github.com/changesets/changesets).
You never bump the version or create a tag by hand — a bot opens a **"version
packages" PR**, and merging it publishes. Every surface (`package.json`, git tag,
`src/version.ts`, the GitHub Release, and the npm version) is produced from the
accumulated changesets, so nothing can drift.

## Versioning

This is a `0.x` package, so semver-zero rules apply. Choose the bump type when
you add the changeset:

- **minor** — a breaking change (`0.2.x` → `0.3.0`)
- **patch** — a feature or bug fix (`0.2.1` → `0.2.2`)

Don't use **major** until you intend to cut `1.0.0`.

## Day-to-day: add a changeset with each PR

Any PR that changes published behaviour includes a changeset describing it:

```bash
bunx changeset
```

Pick the bump type, write a short summary (it becomes the changelog entry), and
commit the generated `.changeset/*.md` file alongside your code.

## How a release happens

On every push to `main`, [`.github/workflows/publish.yml`](../.github/workflows/publish.yml)
runs `changesets/action`, which does one of two things:

1. **Pending changesets exist** → it opens or updates a **"chore: version
   packages"** PR that consumes the changesets, bumps `package.json`,
   regenerates `src/version.ts`, and writes `CHANGELOG.md`. Review and merge it
   when you're ready to release.

2. **That PR was just merged** (no changesets left) → it builds, publishes to npm
   via **trusted publishing (OIDC)** (no token), and creates the matching git tag
   and GitHub Release.

That's the whole flow. To "hold" a release, just don't merge the version PR yet;
it keeps updating as more changesets land.

### Prereleases

For an `rc`/`beta` line, use Changesets pre mode:

```bash
bunx changeset pre enter next   # tag line: e.g. 0.3.0-next.0
bunx changeset version          # (the bot also does this in the version PR)
# … publish via the normal merge flow …
bunx changeset pre exit         # when ready to cut the stable release
```

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

3. **Roll forward.** Revert the offending commit(s) via PR, add a `patch`
   changeset, and let the normal flow ship the fix. This is the real remedy — the
   bad version stays on npm but nobody is pointed at it.

4. **Last resort only** — within 72h, for genuinely broken or secret-leaking
   artifacts:

   ```bash
   npm unpublish kweri@<bad>
   ```

   After 72h this is generally not permitted.

> Editing or deleting the **GitHub** Release/tag does **not** change what's on
> npm. Prioritize steps 1–2 (npm dist-tags) when mitigating — that's what users
> actually install.
