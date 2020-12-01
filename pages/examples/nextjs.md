# Next.js + SWR

You can use Next.js [in conjuntion with SWR](https://swr.vercel.app/docs/data-fetching#graph-ql):

```jsx highlight=4
import { request } from 'graphql-request'

const fetcher = query =>
  request('https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD', query)

function App () {
  const { data, error } = useSWR(
    `{
      people(vegan: true) {
        name
      }
    }`,
    fetcher
  )
  // ...
}
```

# Pokedex

Live example, click the _"Edit on GitHub"_ link below to see the code.
