/* exported unique */

function unique(array) {
  var uniqueArray = [];
  var shallowArray = array.slice();

  while (shallowArray.length > 0) {
    var uniqueWord = shallowArray[0];
    uniqueArray.push(uniqueWord);
    while (shallowArray.indexOf(uniqueWord) !== -1) {
      shallowArray.splice(shallowArray.indexOf(uniqueWord), 1);
    }
  }
  return uniqueArray;
}

// unique(array)
// creates an array of only unique elements
// - create a new array to hold the end XPathResult
// - create a shallow copy of the argument array
//   - while the shallow array has a length greater than 0
//     - create a variable that hold the first value of the shallow array
//     - push that value into the result array
//     - while the value can still be found in the shallow array
//       - splice out the value
// - return the unique array once there are no more values in the shallow array
