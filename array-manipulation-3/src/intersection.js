/* exported intersection */

function intersection(first, second) {
  var result = [];
  for (var f = 0; f < first.length; f++) {
    for (var s = 0; s < second.length; s++) {
      if (first[f] === second[s]) {
        result.push(first[f]);
      }
    }
  }
  return result;
}

// Intersection(first, second)
// creates a new array with unique values found in both arrays

// - create a new array to hold the results in
// - for each value of the first array
//   - for each value of the second array
//     - check to see the value in the first array can be found in the second array
//       - if it is
//         - push it into the result array
// - return the result array
