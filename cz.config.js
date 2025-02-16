
// .cz-config.js (Optional, if you want a separate config file)
export default {
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
    types: [
        { value: "feat", name: "feat: A new feature" },
        { value: "fix", name: "fix: A bug fix" },
        { value: "docs", name: "docs: Documentation" },
        { value: "style", name: "style: Code style changes" },
        { value: "refactor", name: "refactor: Code refactoring" },
        { value: "test", name: "test: Tests" },
        { value: "chore", name: "chore: Build/dependency updates" },
        { value: "wip", name: "wip: Work in progress" },

    ],
    scopes: [
        { name: "packages/util-logger" },
        { name: "services/code-graph" },
    ],
    allowCustomScopes: true
};