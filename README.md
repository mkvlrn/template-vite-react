# template-vite-react

A sane, opinionated template for esm react projects written in typescript and built with vite.

Uses:

- [biome](https://github.com/biomejs/biome) for linting and formatting
- [vitest](https://github.com/vitest-dev/vitest) for tests
- [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages
- [husky](https://github.com/typicode/husky) for git hooks

## running

### `yarn dev`

Runs the project in watch mode, and will automatically restart on changes.

### `yarn build`

Builds the project to `./build`.

### `yarn start`

Runs the project in production mode using vite's preview server.

### `yarn test`, `yarn test:e2e`

Runs tests with vitest.

### `yarn tidy`

Runs biome in fix mode (only [safe fixes](https://biomejs.dev/linter/#safe-fixes)) to lint and format the project. Not only `./src` and `./test`, but also all "loose" config files around root (js, ts, json, jsonc) or other directories.

### `yarn typecheck`

Runs type checking using tsc and the `tsconfig.json` file, which is not the one used to build the project.

## that tsconfig.json seems very strict and opinionated

Yup.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

I suggesting using the settings in `.vscode/settings-example.json`, that should be pasted into your own `.vscode/settings.json`. I'm not commiting the `.vscode/settings.json` proper because it shouldn't be in VCS as it contains your personal settings.
