/* exported tail */

function tail(array) {
  var tail = [];
  for (var i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
}

// tail(array)
// takes in array, creates new array of elements after the first element
// -create new empty array
// - for each array element AFTER the first element
//   - add element at array index to new array
// - return new array
