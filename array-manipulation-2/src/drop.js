/* exported drop */

function drop(array, count) {
  var result = [];
  if (array.length === 0) {
    return result;
  }
  for (var i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

// drop (array, count)
// takes in argument array and count, drops a number of elements from the beginning of the array as specified by count
// - create new array
// - check if array length is 0
//   - if so, return an empty array from the function
// - for each element of the array after the amount specified to be left out of the result array
//   - push the element into the result array
// - return the result array from the function
