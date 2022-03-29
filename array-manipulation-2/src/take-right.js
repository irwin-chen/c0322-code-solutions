/* exported takeRight */

function takeRight(array, count) {
  var result = [];
  if (count > array.length) {
    return array.slice();
  }
  for (var i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

// takeRight(array, count)
// takes an array and returns the count argument's number of elements back starting from the end, but keeping the original order
// - create new empty array
// - check to see if the count argument is larger than the length of the array
//   - if true, return a shallow copy of the array from the function
// - find the starting index of the array by subtracting the total length of the array by the count number
//   - for each index of the array after the new start index, take the elmenet at the index and push it into the new array
// - return the results of the new array from the function
