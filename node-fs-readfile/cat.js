const fs = require('fs');
const [, , ...rest] = process.argv;

let counter = 0;
const arr = [];

function recursion() {
  fs.readFile(rest[counter], 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    arr.push(data);
    counter++;

    if (counter < rest.length) {
      recursion();
    } else if (counter === rest.length) {
      for (let i = 0; i < rest.length; i++) {
        console.log(arr[i]);
      }
    }
  });
}

recursion();
