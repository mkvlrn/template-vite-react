# template-vite-react

![build](https://img.shields.io/github/actions/workflow/status/mkvlrn/template-vite-react/ci.yml?branch=main&style=flat&logo=github)
[![template](https://img.shields.io/badge/template-use_this_template-2ea44f?style=flat&logo=github)](https://github.com/mkvlrn/template-vite-react/generate)
[![mise](https://mise-versions.jdx.dev/badge.svg)](https://mise.jdx.dev)
![license](https://img.shields.io/github/license/mkvlrn/template-vite-react?style=flat)

A sane, opinionated template for esm react projects written in typescript and built with vite.

> [!CAUTION]
> This template requires [mise](https://mise.jdx.dev) to manage runtimes, tools, and tasks in a single workflow, providing a lightweight alternative to devcontainers.
>
> You must [install mise](https://mise.jdx.dev/installing-mise.html) before starting. If you prefer a less opinionated setup, this template isn't for you.

Uses, among other tools/packages:

- [pnpm](https://github.com/pnpm/pnpm) as package manager for node
- [biome](https://github.com/biomejs/biome) for code linting and formatting
- [lefthook](https://github.com/evilmartians/lefthook) for git hooks
- [cocogitto](https://github.com/cocogitto/cocogitto) for commit message linting
- [vitest](https://github.com/vitest-dev/vitest) for testing
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) for styling
- [tanstack router](https://github.com/tanstack/router) for file based router
- [tanstack query](https://github.com/tanstack/query) for fetching stuff

## requirements and dependencies

As noted at the top, you need [mise](https://mise.jdx.dev) to get started with this template. Run `mise install` in the project root to fetch the pinned versions of Node and other tools locally.

This is _by far_ the easiest way to keep your environment consistent across different machines and team members, no matter the frequency of version updates.

Once the tooling is installed, you can install the Node dependencies with `pnpm install`.

> [!NOTE]
> Git hooks are in place to make sure both the tooling managed by mise and the project dependencies are synced with each checkout and merge.

## subpath imports

Subpath imports (`#/`) are used instead of relative paths, mapped via the `imports` field in `package.json` (allowing native Node resolution at runtime without extra build tools) and mirrored in `tsconfig.json` for IDE support.

**Example**:

```ts
import { add } from "#/lib/math"; // this points to ./src/lib/math.ts
```

## running

### `mise dev`

Runs the project in watch mode.

### `mise build`

Builds/transpiles the code to `./build`.

### `mise test`

Runs tests with vitest.

### `mise lint-fix`

Runs biome in fix mode to lint and format the project.

### `mise typecheck`

Runs type checking using tsc.

## ci

This repository uses GitHub Actions for CI. The workflow is defined in `.github/workflows/checks.yml`.

It automates:

- **Linting & Formatting**: Running Biome.
- **Type Checking**: Running TypeScript type checking.
- **Testing**: Running Vitest, halting the workflow at the first test failure.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

This is done by the `.vscode/settings.json` file.

A debug configuration for Firefox is also included.

## license

MIT
