/* exported dropRight */
function dropRight(array, count) {
  var result = [];
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}

// dropRight(array, count)
// takes in an argument array, returns a new array without the number of elements specified by the argument count, starting from the end
// - create a new array
// - for each value before cutting off at the number specified, but starting from teh beginning of the index
//   - push the value into the result array
