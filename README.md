# template-vite-react

[![ci](https://img.shields.io/github/actions/workflow/status/mkvlrn/template-vite-react/ci.yml?branch=main&style=flat&logo=github&label=ci)](https://github.com/mkvlrn/template-vite-react/actions/workflows/ci.yml?query=branch%3Amain)
[![template](https://img.shields.io/badge/template-use_this_template-2ea44f?style=flat&logo=github)](https://github.com/mkvlrn/template-vite-react/generate)
[![mise](https://mise-versions.jdx.dev/badge.svg)](https://mise.jdx.dev)
[![license](https://img.shields.io/github/license/mkvlrn/template-vite-react?style=flat)](https://github.com/mkvlrn/template-vite-react/blob/main/LICENSE)

A sane, opinionated template for React applications built with Vite and TypeScript.

> [!NOTE]
> This template includes an Arch Linux Dev Container based on [mise-devcontainers](https://github.com/mkvlrn/mise-devcontainers), providing a consistent development environment with [mise](https://mise.jdx.dev) preconfigured.
>
> `mise` manages the project-specific runtimes, tools, and tasks inside the container, so it does not need to be installed on the host.

Uses, among other tools/packages:

- [pnpm](https://github.com/pnpm/pnpm) as package manager
- [React](https://react.dev)
- [Vite](https://vite.dev)
- [Biome](https://github.com/biomejs/biome) for linting and formatting
- [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks
- [Cocogitto](https://github.com/cocogitto/cocogitto) for commit message linting
- [Vitest](https://github.com/vitest-dev/vitest) for testing

## requirements and dependencies

To use the included Dev Container you need:

- Docker or a compatible container runtime
- a Dev Container-compatible editor or the [Dev Container CLI](https://github.com/devcontainers/cli)
- an SSH agent exposed through `SSH_AUTH_SOCK` with at least one key loaded

The SSH agent is forwarded into the container for Git authentication and commit signing. Private keys remain on the host.

Once inside the container, install the project dependencies:

```sh
pnpm install
```

The project-specific runtimes and development tools are managed by `mise`.

If you prefer not to use the Dev Container, install [mise](https://mise.jdx.dev) locally and run `mise install` before installing the project dependencies.

> [!NOTE]
> Git hooks keep the tooling managed by mise and the project dependencies synchronized after checkouts and merges.

## running

### `mise dev`

Starts the Vite development server.

### `mise test`

Runs the tests.

### `mise lint-fix`

Runs Biome in fix mode to lint and format the project.

### `mise typecheck`

Runs TypeScript type checking.

### `mise build`

Creates a production build.

## ci

CI is provided by GitHub Actions through [`.github/workflows/ci.yml`](https://github.com/mkvlrn/template-vite-react/blob/main/.github/workflows/ci.yml).

It runs the project's automated checks and verifies that the application builds successfully.

## license

[MIT](https://github.com/mkvlrn/template-vite-react/blob/main/LICENSE)
