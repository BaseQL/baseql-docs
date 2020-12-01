import QueryEditor from '../components/query-editor';
import { request } from 'graphql-request'
import useSWR from 'swr'

const fetcher = query =>
  request('https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD', query)

export default function QueryPlayground({query, disabled = false}) {
  const { data, error } = useSWR(query, fetcher)

  return (
    <div style={{display: 'flex'}}>
      <QueryEditor query={query} disabled={disabled} />
      <pre>
        <code  style={{fontSize: '10px'}}>{JSON.stringify(data.people, undefined, 2)}</code>
      </pre>
    </div>
  )
}