const appData = require('./data.json');
const fs = require('fs');

const add = note => {
  appData.notes[appData.nextId] = note;
  appData.nextId++;

  const newData = JSON.stringify(appData, null, 2);

  fs.writeFile('./data.json', newData, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
};

module.exports = add;
