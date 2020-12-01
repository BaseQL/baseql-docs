import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import Query from '../../components/query';

# Next.js + SWR

You can use Next.js [in conjuntion with SWR](https://swr.vercel.app/docs/data-fetching#graph-ql):

In fact, this documentation's live example are written using exactly that.

<LiveProvider
  scope={{Query}}
  code={`<Query>
    s
  </Query>`}
  theme={oceanicNext}
>
  <div style={{display: "flex"}}>
    <LiveEditor style={{borderRadius: '8px'}}/>
    <LiveError />
    <LivePreview />
  </div>
</LiveProvider>

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
