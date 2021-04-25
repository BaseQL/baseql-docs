import QueryEditor from './query-editor';
import QueryHighlighter from './query-highlighter'
import Loading from './loading'
import theme from 'prism-react-renderer/themes/github'

const styles = {
 split: {
   width: '100%',
   maxHeight: '300px',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'stretch'
 },
 fullWidth: {
  flexDirection: 'column',
  alignItems: 'stretch'
 },
 query: {
  maxHeight: '300px',
 },
 results: {
  whiteSpace: 'pre-wrap',
  flex: 1,
  margin: '4px',
  padding: '10px',
  fontFamily: '"Dank Mono", "Fira Code", monospace',
  maxHeight: '300px',
 } 
}

export default function Query({query, code, error, disabled = false, fullWidth = false}) {
  return (
    <div  style={fullWidth ? styles.fullWidth : styles.split}>
      <QueryEditor query={query} disabled={disabled} style={styles.query}/>
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