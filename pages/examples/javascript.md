# Javascript

## Fetch

```jsx highlight=8
fetch('https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer SECRET_TOKEN',
  },
  body: JSON.stringify({query: "{ people: { name } }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```

## Axios

```jsx highlight=8,9,10,11,12
const axios = require("axios");

axios({
  url: 'https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD',
  method: 'post',
  headers: { 'Authorization': 'Bearer SECRET_TOKEN' },
  data: {
    query: `{
      people {
        name
      }
    }`
  }
}).then((result) => {
  console.log(result.data)
});
```