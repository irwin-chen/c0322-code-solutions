const readEntry = require('./read');
const addEntry = require('./add');
const deleteEntry = require('./delete');
const updateEntry = require('./update');

const [, , type, x, y] = process.argv;

if (type === 'read') {
  readEntry();
} else if (type === 'add') {
  addEntry(x);
} else if (type === 'delete') {
  deleteEntry(x);
} else if (type === 'update') {
  updateEntry(x, y);
}
