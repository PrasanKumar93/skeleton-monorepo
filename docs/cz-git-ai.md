# Generate AI message

## Docs

- https://cz-git.qbb.sh/recipes/openai

```sh
CZ_OPENAI_API_KEY="sk-xxxxx" npx czg ai
```

## Implementation

```sh
npm install dotenv-cli czg --save-dev
```

```.env
CZ_OPENAI_API_KEY=""
```

```json title="package.json"
{
  "scripts": {
    "commit-no-ai": "npx cz", //regular
    "commit": "dotenv -e .env -- npx czg ai" //ai
  }
}
```

Note : Press 'm' to modify the message and add other steps if needed.
