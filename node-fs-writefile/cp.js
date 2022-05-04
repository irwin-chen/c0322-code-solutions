const fs = require('fs');

const [,, initial, final] = process.argv;

let copyData = '';

fs.readFile(initial, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  copyData = data.toString();
  fs.writeFile(final, copyData, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
});
