const fs = require('fs');

const [, , text] = process.argv;

fs.readFile(text, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
