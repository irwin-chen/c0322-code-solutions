/* exported filterOutNulls */

function filterOutNulls(values) {
  var filtered = [];
  var count = 0;
  while (count < values.length) {
    if (values[count] === null) {
      count++;
    } else {
      filtered.push(values[count]);
      count++;
    }
  }
  return filtered;
}
