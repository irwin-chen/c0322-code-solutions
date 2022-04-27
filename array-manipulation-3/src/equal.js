/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// equal(first, second)
// checks if the two argument arrays are equal to each other index by index
// - check if the arrays are the same length
//   - if Not, return false
// - for each index of the two arrays
//   - check if the values are the same at the same index
//     - if not, return false
//   - if the loop finishes without returning false, return true
