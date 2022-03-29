/* exported includes */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// includes(array, value)
// check to see if array includes the argument value, returns a boolean value
// - for each index of the array, check to see if the element is equal to the argument value provided
//   - if true return true
// - otherwise, return false
