# cz-git

## Install

```sh
npm install --save-dev commitizen cz-git
```

Modify your package.json to include cz-git as the commitizen adapter:

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

## Customize the Commit Prompts in .cz-config.js

```js
//.cz-config.js
export default {
  // Use cz-git as the adapter
  //extends: ["@commitlint/config-conventional"],

  // Define types for the commit messages
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Select the scope of your change (optional):",
      customScope: "Specify a custom scope:",
      subject: "Write a short description of the change:\n",
      body: "Provide a longer description of the change (optional). Use '|' for new lines:\n",
      breaking: "List any breaking changes (optional):\n",
      footer: "Reference issues this commit closes (e.g., #123) (optional):\n",
      confirmCommit: "Are you sure you want to proceed with the commit?",
    },

    // Define commit types
    types: [
      { value: "feat", name: "feat: A new feature" },
      { value: "fix", name: "fix:   A bug fix" },
      { value: "docs", name: "docs: Documentation only changes" },
      {
        value: "style",
        name: "style:    Code style changes (formatting, missing semi-colons, etc)",
      },
      {
        value: "refactor",
        name: "refactor: A code change that neither fixes a bug nor adds a feature",
      },
      {
        value: "perf",
        name: "perf:  A code change that improves performance",
      },
      {
        value: "test",
        name: "test: Adding missing tests or correcting existing tests",
      },
      {
        value: "chore",
        name: "chore: Changes to the build process or auxiliary tools",
      },
      { value: "revert", name: "revert: Reverts a previous commit" },
      { value: "wip", name: "wip: Work in progress" },
    ],

    // Define scopes
    scopes: [
      { name: "api" },
      { name: "frontend" },
      { name: "backend" },
      { name: "database" },
      { name: "auth" },
      { name: "config" },
      { name: "tests" },
      { name: "docs" },
      { name: "ci" },
    ],

    // Allow custom scope
    allowCustomScopes: true,

    // Commit format example
    example: "feat(auth): add OAuth2 login support",

    // Commit message format confirmation
    confirmColorize: true,
  },
};
```

## Usage

Instead of git commit -m, use:

```sh
npx cz
```

- Better add as a script in package.json:

```json
{
  "scripts": {
    "commit": "npx cz"
  }
}
```

## This will guide you through an interactive prompt:

```sh
? Select the type of change that you're committing: (Use arrow keys)
  feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  ...
? Select the scope of your change (optional):
  api
  frontend
  backend
  database
  ...
? Write a short, imperative description of the change:
> Add JWT authentication
? Provide a longer description of the change (optional). Use '|' for new lines:
> Implement JWT authentication for API requests.
? List any breaking changes (optional):
> No
? Reference issues this commit closes (optional):
> #123
? Are you sure you want to proceed with the commit? (Y/n)
```

# Enforce Commit Message Format with commitlint (Optional)

```sh
npm install --save-dev @commitlint/{config-conventional,cli}
```

```js
//commitlint.config.js
export default {
  extends: ["@commitlint/config-conventional"],
};
```

# Add a Git hook with Husky:

```sh
# dev dependency
npm install --save-dev husky
mkdir -p .husky
git config core.hooksPath .husky
```

```sh
echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg
chmod +x .husky/commit-msg

# Since Husky stores hooks inside .husky/, you need to ensure they are executable:
chmod -R +x .husky/*
```

```sh
# Run this command to see if Husky is working:
HUSKY_DEBUG=1 git commit -m "test"
```

## How Husky Works

Hooks are stored inside .husky/ in your repository

```sh
node_modules/
.husky/
  ├── pre-commit         # Runs before `git commit`
  ├── commit-msg         # Runs before commit message is saved
  └── pre-push           # Runs before `git push`
```

- Example of .husky/commit-msg Hook

```sh
npx --no-install commitlint --edit $1
```

## When You Run git commit -m "some message"

- Git creates a commit message file in .git/COMMIT_EDITMSG.
- The Husky commit-msg hook runs:

```sh
npx --no-install commitlint --edit .git/COMMIT_EDITMSG
```

- Commitlint checks if the message follows the rules:
  • ✅ If valid: The commit proceeds.
  • ❌ If invalid: The commit is rejected with an error.
