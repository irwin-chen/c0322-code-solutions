/* exported filterOutStrings */

function filterOutStrings(values) {
  var stringless = [];
  var count = 0;
  while (count < values.length) {
    if (typeof values[count] !== 'string') {
      stringless.push(values[count]);
    }
    count++;
  }
  return stringless;
}
