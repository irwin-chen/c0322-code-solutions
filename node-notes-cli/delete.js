let appData = require('./data.json');
const fs = require('fs');

var deleteEntry = id => {
  delete appData.notes[id];
  console.log(appData);
  appData = JSON.stringify(appData, null, 2);
  console.log(appData);
  fs.writeFile('./data.json', appData, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
};

module.exports = deleteEntry;
