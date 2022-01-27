export default function SupportedBy({airtable = true, gsheets = true}) {
  return (
    <div>
      <div style={{textAlign: 'left', position: 'relative', right: 0}}>
        <sup><i>Supported by:</i>
        &nbsp;{airtable && <img width="16" src="/airtable-icon-192.png" style={{display: 'inline'}} title="airtable" />}
        &nbsp;{gsheets && <img width="16" src="/gsheets-icon-64.png" style={{display: 'inline'}} title="google sheets"/>}
        </sup>
      </div>
    </div>
  )
}