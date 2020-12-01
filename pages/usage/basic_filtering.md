# Basic Filtering

```graphql highlight=2
{
  people(name: "ben", vegan: false) {
    name
  }
}
```