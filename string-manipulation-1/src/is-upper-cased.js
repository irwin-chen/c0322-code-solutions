/* exported isUpperCased */

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

// isUpperCased(word)
// checks to see if all tehe characters in a word are isUpperCased, returns a boolean value
// input:'true' ouput: false
// - for each character
//   - check to see if each character is capitalized
//     - check letter against capitalized version itself
//     - if false, return false
//     - if true, let run through until end and return true
