# @janghood/config

> Janghood config loader

## Document

### Usage

#### Config File

You can use `defineJhConfig` to define your config.

config name maybe :

```typescript
  'janghood.config.js',
  'janghood.config.mjs',
  'janghood.config.ts',
  'janghood.config.cjs',
  'janghood.config.mts',
  'janghood.config.cts'
```

In this version, you can add config file in your package.json root path.
Load logic base on `vite config`, but without exhaustive testing, you can also explore the location of the config by
yourself.

##### Typescript

If use `typescript`, you can use `defineJhConfig` to define your config.

```typescript

export default defineJhConfig({
  // ...
})

```

#### API

> haven't written yet.
> 
> you can see the type `JanghoodConfig` definition in `types/config.d.ts`.
> 
> `base` option will merge to `apiExtractor`,`lint.eslint`,`lint.prettier`.
> 
> `prettier` not support right now.
