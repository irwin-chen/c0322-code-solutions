/* exported take */

function take(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// take (array, count)
// takes an array and argument count, takes the first number of elements specified in the count and returns them in a new array
// - create a new array
// - check to see if the array length is 0
//   - if so, return the empty array
// - for each index until the specified count
//   - push the element at the correpsonding index in the argument array into the new array
// - return the new array from the function
