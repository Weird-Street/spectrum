const fetch = require('node-fetch');
const fs = require('fs');

fetch(`https://beta.weirdstreet.com/api`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    fs.writeFile(
      './fragmentTypes.json',
      JSON.stringify(result.data, null, 2),
      err => {
        if (err) console.error('Error writing fragmentTypes file', err);
        console.log('Fragment types successfully extracted!');
      }
    );
  });
