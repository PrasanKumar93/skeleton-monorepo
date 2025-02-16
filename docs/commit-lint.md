```sh
npm install --save-dev commitizen cz-git @commitlint/cli @commitlint/config-conventional
```

```json title="package.json"
{
  "type": "module", // If you're using modules
  "scripts": {
    "commit": "npx cz" //add short hand
  },
  "devDependencies": {
    "@commitlint/cli": "^19.7.1",
    "@commitlint/config-conventional": "^19.7.1",
    "commitizen": "^4.3.1",
    "cz-git": "^1.11.0"
  },
  "config": {
    //add commitizen config
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

```js title="commitlint.config.js"
// commitlint.config.js
export default {
  extends: ["@commitlint/config-conventional"], // Use conventional config
  prompt: {
    // cz-git options if you want to use them
    // or leave this empty to use the default commitizen prompt
  },
};
```

```js title="cz.config.js"
export default {
  types: [
    { value: "featXX", name: "featXX: A new feature" },
    { value: "fix", name: "fix: A bug fix" },
    { value: "docs", name: "docs: Documentation" },
    { value: "style", name: "style: Code style changes" },
    { value: "refactor", name: "refactor: Code refactoring" },
    { value: "test", name: "test: Tests" },
    { value: "chore", name: "chore: Build/dependency updates" },
  ],
  scopes: [
    { name: "component" },
    { name: "utils" },
    { name: "api" },
    { name: "docs" },
  ],
};
```

```sh
npm cache clean --force
npx clear-npx-cache
```
