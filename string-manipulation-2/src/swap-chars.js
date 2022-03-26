/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var swapped = '';
  var one = string[firstIndex];
  var two = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapped += two;
    } else if (i === secondIndex) {
      swapped += one;
    } else {
      swapped += string[i];
    }
  }
  return swapped;
}

// swapChars(firstIndex, secondIndex, string)
// takes in argument string and two numbers, firstIndex and secondIndex. returns a string where the letters at the index location of the two numbers are switched
// - create new string to hold result string
// - create variable to hold the character at the first index
// - create variable to hold character at second index
//   - for each letter of the argument string
//     - check if the index number is one of the argument numbers provided
//       - if it is equal to the first argument number, add the elmenet at the index of the second argument number to the result string (switch)
//       - if it is equal to the second argument number, add the element at the index of the first argument number to the result string
//       - otherwise, add the element at that corresponding index in the argument string to the new result string
// - return result string
