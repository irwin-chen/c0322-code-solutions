/* exported filterOutNulls */

function filterOutNulls(values) {
  var filtered = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
