/* exported reverse */

function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}

// reverse(array)
// takes the elements in an array and reverses the order within the array
// - create new array
// - for each element of the argument array starting from the last element
//   - push the element at the array index into the new array
// - return the new array
