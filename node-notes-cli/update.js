const fs = require('fs');
let appData = require('./data.json');

const update = (id, note) => {
  appData.notes[id] = note;
  appData = JSON.stringify(appData, null, 2);

  fs.writeFile('./data.json', appData, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
};

module.exports = update;
