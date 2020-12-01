# Advanced Filtering

BaseQL support a DSL similar to [MongoDB]() and [Hasura]()

```graphql highlight=2
{
  people(_filter: {}) {
    name
  }
}
```

## Supported Operations