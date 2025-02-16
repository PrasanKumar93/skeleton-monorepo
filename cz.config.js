// .cz-config.js (Optional, if you want a separate config file)
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