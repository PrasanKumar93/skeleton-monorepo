# Husky

Add a Git hook with Husky:

```sh
# dev dependency
npm install --save-dev husky
```

```sh
mkdir -p .husky

echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg
chmod +x .husky/commit-msg

# Since Husky stores hooks inside .husky/, you need to ensure they are executable:
chmod -R +x .husky/*
```

```sh
git config core.hooksPath .husky
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
