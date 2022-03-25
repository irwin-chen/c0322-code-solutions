/* exported getIndexes */

function getIndexes(array) {
  var index = [];
  var count = 0;
  while (count < array.length) {
    index.push(count);
    count++;
  }
  return index;
}
