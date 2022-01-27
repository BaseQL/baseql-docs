import SupportedBy from '../../components/supported-by';
import QueryPlayground from '../../components/query-playground';

# Sorting
<SupportedBy gsheets={false}/>

You can order by single or multiple columns and specify ascending or descending order:

### Single

<br />

<QueryPlayground disabled={true} query={`{
people(_order_by: "name") {
  name
}\n}`}/>

### Direction

<br />

<QueryPlayground disabled={true} query={`{
people(_order_by: {name: "desc"}) {
  name
}\n}`}/>

### Multiple

<br />

<QueryPlayground disabled={true} query={`{
people(_order_by: [
  {vegan: "desc"},
  "offspring"
]) {
  name,
  vegan,
  offspring
}\n}`}/>