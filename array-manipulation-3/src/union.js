/* exported union */

function union(first, second) {
  var combined = first.concat(second);
  var copy = Array.from(combined);
  var unique = [];

  for (var i = 0; i < combined.length; i++) {
    if (copy.indexOf(combined[i]) !== -1) {
      var value = combined[i];
      unique.push(combined[i]);
      while (copy.indexOf(value) !== -1) {
        copy.splice(copy.indexOf(value), 1);
      }
    }
  }
  return unique;
}

// union(first, second)
// returns unique values from both arrays in the order they appear
// - create an array that contains both argument arrays
// - create a shallow copy of the combined array, this is the one that gets changed
// - create an empty array to hold the unique values
//   - for each value of the combined array
//     - check if the value can found in the copy array
//       - if it can, push the value into the unique array
//       - while the value can still be found in the copy array
//         - remove the value from the copy array
// - return the value of the unique array
