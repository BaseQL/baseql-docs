import { request } from 'graphql-request'
import useSWR from 'swr'
import Query from './query'

const fetcher = query =>
  request('https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD', query)

export default function QueryPlayground({query, disabled = false, fullWidth}) {
  const { data, error } = useSWR(query, fetcher)

  return (
    <Query
      query={query}
      code={JSON.stringify(data, undefined, 2)}
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
    />
  )
}