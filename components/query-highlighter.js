import { Fragment } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

export default function QueryHighlighter({code, theme}) {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="graphql">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )
}