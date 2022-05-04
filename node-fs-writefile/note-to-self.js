const fs = require('fs');

const [, , text] = process.argv;

fs.writeFile('note.txt', text + '\n', 'utf8', err => {
  if (err) {
    throw err;
  }
});
