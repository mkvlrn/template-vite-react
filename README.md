# template-vite-react

A sane, opinionated template for esm react projects written in typescript and built with vite.

Uses:

- [biome](https://github.com/biomejs/biome) for linting and formatting
- [vitest](https://github.com/vitest-dev/vitest) for tests
- [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages
- [husky](https://github.com/typicode/husky) for git hooks

## running

### `yarn dev`

Runs the project in watch mode.

### `yarn build`

Builds/transpiles the code to `./build`.

### `yarn start`

Runs the production simulation of the project.

### `yarn test`

Runs tests with vitest.

### `yarn biome-fix`

Runs biome in fix mode (only [safe fixes](https://biomejs.dev/linter/#safe-fixes)) to lint and format the project.

### `yarn typecheck`

Runs type checking using tsc.

## that tsconfig.json seems very strict and opinionated

Yup.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

I suggest using the settings in `.vscode/settings-example.json`, that should be pasted into your own `.vscode/settings.json`. I'm not commiting the `.vscode/settings.json` proper because it shouldn't be in VCS as it contains your personal settings.
