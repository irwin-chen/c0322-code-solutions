/* exported isLowerCased */

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// isLowerCased(word)
// check each letter and see if it is lower case, return boolean value
// - for each letter in the word
//   - check if letter is equal or not to lower case letter
//     if NOT equal, return false, kick out of sequence
//   -otherwise keep checking for entire word
//     - if loop ends without returning false, return true
