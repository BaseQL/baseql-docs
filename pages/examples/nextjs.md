import Callout from 'nextra-theme-docs/callout'

# Next.js + SWR

You can use Next.js [in conjuntion with SWR](https://swr.vercel.app/docs/data-fetching#graph-ql):

```jsx highlight=8,9,10
import { request } from 'graphql-request'

const fetcher = query =>
  request('https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD', query)

function App () {
  const { data, error } = useSWR(`{
      people(vegan: true) {
        name
      }
    }`,
    fetcher
  )
  // ...
}
```

<Callout emoji="💡">
In fact this documentation is written in Next.js and all live examples use BaseQL requests!
<br />See full source code at: [github.com/BaseQL/baseql-docs](https://github.com/BaseQL/baseql-docs)
</Callout>