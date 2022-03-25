/* exported filterOutStrings */

function filterOutStrings(values) {
  var stringless = [];
  var count = 0;
  while (count < values.length) {
    if (Number.isInteger(values[count])) {
      stringless.push(values[count]);
    }
    count++;
  }
  return stringless;
}
