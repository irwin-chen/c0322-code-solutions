const fs = require('fs');

const read = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const appData = JSON.parse(data);
    for (const step in appData.notes) {
      console.log(`${step}: ${appData.notes[step]}`);
    }
  });
};

module.exports = read;
