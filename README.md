# Reproduce Bug

## Given

```yaml
    Create repository request.:
      description: Lorem ipsum dolor sit amet.
      type: object
      discriminator:
        propertyName: type
        mapping:
          azure: '#/components/schemas/CreateAzureRepositoryRequest'
          git: '#/components/schemas/CreateGitRepositoryRequest'
```

## When

run `npm run generate`

## Expected

A discriminated union of the two types:
```ts
        "Create repository request.": {
            type: "azure" | "git";
        } & ({
            type: "azure";
        } & components["schemas"]["CreateAzureRepositoryRequest"]) | ({
            type: "git";
        } & components["schemas"]["CreateGitRepositoryRequest"]);
```

## Actual

```ts
        "Create repository request.": Record<string, never>;
```
