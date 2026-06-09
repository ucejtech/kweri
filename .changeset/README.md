# Changesets

This folder is managed by [Changesets](https://github.com/changesets/changesets).

## Adding a changeset

Every PR that changes published behaviour should include a changeset. Run:

```bash
bunx changeset
```

Pick a bump type and write a short summary (this becomes the changelog entry).
Commit the generated `.changeset/*.md` file with your PR.

**Bump types on this `0.x` package** (semver-zero):

- **minor** — a breaking change (`0.2.x` → `0.3.0`)
- **patch** — a feature or bug fix (`0.2.1` → `0.2.2`)

Do not use **major** until you intend to cut `1.0.0`.

## How releases happen

You don't bump versions or tag by hand. On every push to `main`, the
`changesets/action` either:

- opens/updates a **"chore: version packages"** PR that consumes the pending
  changesets, bumps `package.json`, and writes `CHANGELOG.md`; or
- if that PR was just merged (no changesets left), **publishes to npm** via
  trusted publishing and creates the git tag + GitHub Release.

See [`misc/RELEASING.md`](../misc/RELEASING.md).
