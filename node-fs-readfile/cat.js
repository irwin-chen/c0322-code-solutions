const fs = require('fs');
const [, , ...rest] = process.argv;

console.log(rest);

const counter = 0;
for (let i = 0; i < rest.length; i++) {
  fs.readFile(rest[i], 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(counter, data);
  });
}
