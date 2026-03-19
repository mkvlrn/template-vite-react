# template-vite-react

![build](https://img.shields.io/github/actions/workflow/status/mkvlrn/template-vite-react/ci.yml?branch=main&style=flat&logo=github)
[![template](https://img.shields.io/badge/template-use_this_template-2ea44f?style=flat&logo=github)](https://github.com/mkvlrn/template-vite-react/generate)
[![mise](https://badgen.net/badge/mise/en-place/1c1614?icon=https://raw.githubusercontent.com/mkvlrn/template-node/refs/heads/main/.github/assets/mise-logo-dark.svg)](https://mise.jdx.dev)
![license](https://img.shields.io/github/license/mkvlrn/template-vite-react?style=flat)

A sane, opinionated template for esm react projects written in typescript and built with vite.

> [!IMPORTANT]
> This template requires **mise**. It manages the correct versions of runtimes and tooling, such as Node itself, pnpm, and others.
>
> Check https://mise.jdx.dev

Uses:

- [biome](https://github.com/biomejs/biome) for linting and formatting
- [vitest](https://github.com/vitest-dev/vitest) for tests
- [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages
- [husky](https://github.com/typicode/husky) for git hooks
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) for styling
- [tanstack router](https://github.com/tanstack/router) for file based router
- [tanstack query](https://github.com/tanstack/query) for fetching stuff

## setup

To ensure a reproducible environment, [mise](https://mise.jdx.dev/) is used:

1. **Install mise**: https://mise.jdx.dev/getting-started.html#installing-mise-cli
2. **Activate mise**: https://mise.jdx.dev/getting-started.html#activate-mise
3. **Run setup**:
   ```bash
   mise setup
   ```

This task trusts the project config, installs CLI tools (Node, pnpm, ncu), and runs pnpm install. All other scripts are standard package.json commands.

> [!NOTE]
> Git hooks are in place to make sure both the tooling managed by mise and the project dependencies are synced with each checkout and merge.

## subpath imports

Subpath imports (`#/`) are used instead of relative paths, mapped in both `package.json` and `tsconfig.json`.

**Example**:

```ts
import { add } from "#/math/basic"; // this points to ./src/math/basic.ts
```

## running

### `pnpm dev`

Runs the project in watch mode.

### `pnpm build`

Builds/transpiles the code to `./build`.

### `pnpm start`

Runs the production simulation of the project.

### `pnpm test`

Runs tests with vitest.

### `pnpm biome-fix`

Runs biome in fix mode to lint and format the project.

### `pnpm typecheck`

Runs type checking using tsc.

## npm-check-updates

This global package is managed by mise as it is used as a global tool. Simply running `ncu` will list possible updates from `package.json`. `ncu -u` will set those versions in `package.json`, and `pnpm install` will upgrade them.

For more info, https://github.com/raineorshine/npm-check-updates .

## ci

GitHub Actions runs on pushes and pull requests to `main`, executing tsc, biome check, and tests.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

This is done by the `.vscode/settings.json` file.

A debug configuration for Firefox is also included.

## license

MIT
