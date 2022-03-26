/* exported compact */

function compact(array) {
  var compact = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compact.push(array[i]);
    }
  }
  return compact;
}

// function compact(array)
// takes array, removes all the falsey and only returns truthy, pushes into new array
// - create new array
//   - for each element of the argument index
//     - check if element at array index is a truthy
//       - if truthy, push into the new array
// - return new array
