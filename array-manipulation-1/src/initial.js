/* exported initial */

function initial(array) {
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  }
  return initial;
}

// initial(array)
// takes in an array, takes every element except the last and places it in new array
// -create new array
// - for each value before the last element of the array:
//   - push element at the index number into the new array
// -return new array
