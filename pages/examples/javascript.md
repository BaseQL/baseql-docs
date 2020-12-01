# Javascript

## Fetch

```jsx highlight=7
fetch('https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{ people: { name } }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```

## Axios

```jsx highlight=7,8,9,10,11
const axios = require("axios");

axios({
  url: 'https://api.baseql.com/airtable/graphql/appuzDcQEvfnkzXjD',
  method: 'post',
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