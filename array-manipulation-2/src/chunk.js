/* exported chunk */

function chunk(array, size) {
  var result = [];
  var loops = Math.trunc(array.length / size);
  var counter = 0;
  var remainder = array.length % size;
  while (loops > 0) {
    var holder = [];
    for (var i = 0; i < size; i++) {
      holder.push(array[counter]);
      counter++;
    }
    result.push(holder);
    loops--;
  }
  if (remainder !== 0) {
    var remainderHolder = [];
    for (var x = 0; x < remainder; x++) {
      remainderHolder.push(array[counter]);
      counter++;
    }
    result.push(remainderHolder);
  }
  return result;
}

// chunk(array, size)
// takes in an argument array and splits it into sub arrays with array lengths specified by the argument size. Any leftover elements are placed into a final array
// - create new array, holds the entire result array
// - create new variable to hold the result of the number of times size goes into array.length. this is to tell the function how many "chunks" we have (loops)
// - create new counter variable to keep track which index of the original array we are on, will increase with each iteration of the loop running that pushes an element into a chunk subarray (counter)
// - create a new remainder variable to check if we need to tag on any last bits to a subarray, use % and saves the remainder amount.
// - while the the number of chunks we have is greater than 0
//   - create a new array (sub array chunks) to hold the elements in
//   - for each chunk
//     - push the array element at the index, tracked by counter, into the sub array
//     - increase the counter variable by 1
//   - at the end of the loop, push the sub array into the main result array
//   - decrease the number of loops by 1
// - after the loops for the full chunks have been completed
//   - check to see if there are any leftover elements in the array by checking if the remainder is not equal to 0
//     -if there is a remainder, create another array to hold the leftover elements
//     - for each remainder element in the array
//       - push the elmeent at the corresponding index (tracked by counter) into the subarray
//       - increase the counter
//     - at the end of the remainder loops, push the array into the results array
// - return the result array from the function
