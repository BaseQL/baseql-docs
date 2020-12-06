import QueryPlayground from '../../components/query-playground';

# Filtering

### Basic

Basic filtering by field(s) values:

<br />

<QueryPlayground disabled={true} query={`{
people(
  country: "🇺🇸USA", 
  vegan: true
) {
  name
}\n}`}/>

### Advanced DSL

We support a filtering DSL similar to [MongoDB](https://docs.mongodb.com/manual/reference/operator/query/) and [Hasura](https://hasura.io/docs/1.0/graphql/core/queries/query-filters.html) via `_filter` operator:

<br />

<QueryPlayground disabled={true} query={`{
people(_filter: {
  _and: [
    {
      _or: [
        {vegan: {_eq: true}}
        {city: {_nin: ["Los Angeles", "Monterrey"]}}
      ]
    },
    {
      netWorth: {_gte: 5000}
    }
  ]
}) {
  name
}\n}`}/>

### Supported Operators

#### Comparison

- Equality: `_eq`, `_ne` 
- Greater than or less: `_gt`, `_gte`, `_lt`, `_lte`
- List based: `_in`, `_nin`

#### Logical

- Group: `_and`, `_or`