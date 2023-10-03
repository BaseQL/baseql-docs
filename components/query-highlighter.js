import { Highlight, themes } from 'prism-react-renderer'

export default function QueryHighlighter({code, theme = themes.shadesOfPurple, language = "graphql", extraStyle}) {
  return (
    <Highlight theme={theme} code={code} language={language} >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{...style, ...extraStyle}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}