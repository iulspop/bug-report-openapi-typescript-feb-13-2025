# Reproduce Bug

## Given

```yaml
    CreateRepositoryRequest:
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

## Actual

```ts
        CreateRepositoryRequest: Record<string, never>;
```

## Expected

A discriminated union of the two types, something like:
```ts
        "CreateRepositoryRequest": {
            type: "azure" | "git";
        } & ({
            type: "azure";
        } & components["schemas"]["CreateAzureRepositoryRequest"]) | ({
            type: "git";
        } & components["schemas"]["CreateGitRepositoryRequest"]);
```