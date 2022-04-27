/* exported difference */

function difference(first, second) {
  var result = [];
  var subArray = [];

  for (var f = 0; f < first.length; f++) {
    var counter = 0;
    for (var s = 0; s < second.length; s++) {
      if (first[f] !== second[s]) {
        counter++;
        if (counter === second.length) {
          result.push(first[f]);
        }
      }
    }
  }
  for (s = 0; s < second.length; s++) {
    var subCounter = 0;
    for (f = 0; f < first.length; f++) {
      if (second[s] !== first[f]) {
        subCounter++;
        if (subCounter === first.length) {
          subArray.push(second[s]);
        }
      }
    }
  }
  return result.concat(subArray);
}

// difference (first, second)
// checks for the symmetric difference between two arrays - no repeated entries
// - create an array to hold the result array
// - create a second array to hold the second array
//   - for each entry in the first array
//     - have to check it against each individual entry of the second array
//     - create a counter to keep track of whether or not the value at that index can be found
//     - if the value of counter reaches the length of the second array, that means it did not find any repeats
//       - in that case, save the value of the first array in the result
//   - for each entry in the second array
//     - check if the letter can be found in the first array
//     - create a counter to check for how many times the condition fails
//       - if the letter is not found in the first array, push the letter into the subArray
//   - concatenate the result array with the subArray and return the result
