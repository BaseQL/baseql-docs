# cURL

```bash highlight=4
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ people { name } }" }' \
  https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD
```