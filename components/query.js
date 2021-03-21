import QueryEditor from './query-editor';
import QueryHighlighter from './query-highlighter'
import Loading from './loading'
import theme from 'prism-react-renderer/themes/github'

const styles = {
 results: {
  whiteSpace: 'pre-wrap',
  flex: 1,
  margin: '4px',
  padding: '10px',
  fontFamily: '"Dank Mono", "Fira Code", monospace',
 } 
}

export default function Query({query, code, error, disabled = false}) {
  return (
    <div style={{width: '100%', maxHeight: '300px', display: 'flex', alignItems: 'stretch'}}>
      <QueryEditor query={query} disabled={disabled}/>
      <pre style={styles.results}>
        {!code && !error && <Loading />}
        {!!code && (
          <QueryHighlighter code={code} theme={theme} />
        )}
        {!!error && (
          <div>❌ Error: 
            <QueryHighlighter code={code} theme={theme} />
          </div>
        )}
      </pre>
    </div>
  )
}