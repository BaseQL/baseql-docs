import { request } from 'graphql-request'
import useSWR from 'swr'
import QueryEditor from './query-editor';
import QueryHighlighter from './query-highlighter'
import theme from 'prism-react-renderer/themes/github'

const fetcher = query =>
  request('https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD', query)

export default function QueryPlayground({query, disabled = false}) {
  const { data, error } = useSWR(query, fetcher)

  return (
    <div style={{width: '100%', maxHeight: '300px', display: 'flex', alignItems: 'stretch'}}>
      <QueryEditor query={query} disabled={disabled}/>
      <pre style={{
        whiteSpace: 'pre-wrap',
        flex: 1,
        margin: '4px',
        padding: '10px',
        fontFamily: '"Dank Mono", "Fira Code", monospace',
      }}>
        {!!data && <QueryHighlighter code={JSON.stringify(data, undefined, 2)} theme={theme} />}
      </pre>
    </div>
  )
}