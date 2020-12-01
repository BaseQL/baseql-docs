import QueryEditor from '../../components/query-editor';

export default function QueryPlayground({query, disabled = false}) {
  return (
    <div style={{display: 'flex'}}>
      <QueryEditor query={query} disabled={disabled} />
    </div>
  )
}