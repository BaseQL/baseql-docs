import QueryPlayground from '../../components/query-playground';

# Pagination

Paginate results using `_page_size` and `_page` number:

<br />

<QueryPlayground disabled={true} query={`{
people(
  _page_size: 3,
  _page: 1
) {
  name
}\n}`}/>