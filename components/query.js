import QueryHighlighter from './query-highlighter'
import { themes } from 'prism-react-renderer';
import Loading from './loading'

const styles = {
 split: {
   maxHeight: '300px',
   width: '100%',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'stretch'
 },
 fullWidth: {
  flexDirection: 'column',
  alignItems: 'stretch'
 },
 code: {
  whiteSpace: 'pre-wrap',
  maxHeight: '300px',
  boxSizing: 'border-box',
  fontFamily: '"Dank Mono", "Fira Code", monospace',
  borderRadius: '8px',
  flex: 1,
  overflow: 'scroll',
  margin: '4px',
  padding: '10px',
 }
}

export default function Query({query, code, error, fullWidth = false}) {
  return (
    <div  style={fullWidth ? styles.fullWidth : styles.split}>
      <QueryHighlighter code={query} theme={themes.okaidia} extraStyle={styles.code}/>
      {!code && !error && <Loading />}
      {!!code && (
        <QueryHighlighter code={code} theme={themes.github} language="jsx" extraStyle={styles.code}/>
      )}
      {!!error && (
        <div>❌ Error: 
          <QueryHighlighter code={code} theme={themes.github} language="jsx" extraStyle={styles.code}/>
        </div>
      )}
    </div>
  )
}