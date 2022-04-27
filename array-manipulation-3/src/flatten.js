/* exported flatten */
function flatten(array) {
  var resultArray = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (Array.isArray(array[arrayIndex])) {
      var subArray = array[arrayIndex];
      for (var subIndex = 0; subIndex < subArray.length; subIndex++) {
        resultArray.push(subArray[subIndex]);
      }
    } else {
      resultArray.push(array[arrayIndex]);
    }
  }
  return resultArray;
}

// flatten (array)
// takes in an Array, and unwraps any children arrays by one level
// - create a new array to hold the result
// - for each index of the argument array
//   - check if the value at that index is an array
//     - if so
//       - store the subarray
//       - for each index of the subarray
//         - push the value into the the result array
//     - else, push the value straight into the array
