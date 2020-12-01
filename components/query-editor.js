import { Component } from 'react'

import Editor from 'react-simple-code-editor'
import theme from 'prism-react-renderer/themes/shadesOfPurple'
import QueryHighlighter from './query-highlighter'

const styles = {
  root: {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    borderRadius: '8px',
    ...theme.plain
  }
}

class QueryEditor extends Component {
  state = { code: this.props.query };

  onValueChange = code => {
    this.setState({ code })
  }

  highlight = code => (<QueryHighlighter code={code} theme={theme}/>)

  render() {
    return (
      <Editor
        value={this.state.code}
        disabled={this.props.disabled}
        onValueChange={this.onValueChange}
        highlight={this.highlight}
        padding={10}
        style={styles.root}
      />
    )
  }
}
export default QueryEditor
