/* exported isPalindromic */
function isPalindromic(string) {
  var spacelessWord = string.replaceAll(' ', '');
  var half = Math.trunc(spacelessWord.length / 2);
  var firstHalf = spacelessWord.substring(0, half);
  var secondHalf = spacelessWord.substring(half);
  if (spacelessWord % 2 === 1) {
    secondHalf = spacelessWord.substring(half + 1);
  }

  var secondFlipped = '';

  for (var wordIndex = secondHalf.length - 1; wordIndex >= 0; wordIndex--) {
    secondFlipped += secondHalf[wordIndex];
  }

  for (var checkIndex = 0; checkIndex < firstHalf.length; checkIndex++) {
    if (firstHalf[checkIndex] !== secondFlipped[checkIndex]) {
      return false;
    }
  }
  return true;
}

// isPalindromic(string)
// takes a string and check to see if its a palindrome, returns a boolean value
// - remove any extra spaces in the argument string, store it as a new variable
// - create a new variable to find the middle index of the string argument
// - create a variable for the first half of the string
// - create a variable for the second half of the string
// - check to see if there is an odd number of letters
//   - if that is the case, remove the first letter from the second string
// - create a new empty variable to hold a flipped string
// - for each index of the second string
//   - starting from the end of the word, add in each letter of the second string to the flipped string
// - for each letter of the first string
//   - check to see if the letter at that index is the same as the letter of the flipped string at the same index
//     - if the letters are not the same, return false
// - otherwise return true after the for loop finishes
