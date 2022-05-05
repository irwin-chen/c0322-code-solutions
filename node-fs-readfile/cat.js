const fs = require('fs');
const [, , ...rest] = process.argv;

let counter = 0;

function recursion() {
  fs.readFile(rest[counter], 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    counter++;
    console.log(data);
    if (counter < rest.length) {
      recursion();
    }
  });
}

recursion();
