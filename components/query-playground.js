import QueryEditor from '../../components/query-editor';

export default function QueryPlayground({query}) {
  return (
    <div style={{display: 'flex'}}>
      <QueryEditor query={query} />
    </div>
  )
}