module.exports = {
    // Use cz-git as the adapter
    extends: ["@commitlint/config-conventional"],

    // Define types for the commit messages
    prompt: {
        messages: {
            type: "Select the type of change that you're committing:",
            scope: "Select the scope of your change (optional):",
            customScope: "Specify a custom scope:",
            subject: "Write a short, imperative description of the change:\n",
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
            { name: "packages/util-logger" },
            { name: "services/code-graph" },
            { name: "services/business-graph" },
        ],

        // Allow custom scope
        allowCustomScopes: true,

        // Commit format example
        example: "feat(auth): add OAuth2 login support",

        // Commit message format confirmation
        confirmColorize: true,
    },
};