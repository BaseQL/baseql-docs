import { request } from 'graphql-request'
import useSWR from 'swr'
import Query from './query'

const fetcher = query =>
  request(`${process.env.api_url}/airtable/graphql/appuzDcQEvfnkzXjD`, query)

export default function QueryPlayground({query, fullWidth}) {
  const { data, error } = useSWR(query, fetcher)

  return (
    <Query
      query={query}
      code={JSON.stringify(data, undefined, 2)}
      error={error}
      fullWidth={fullWidth}
    />
  )
}