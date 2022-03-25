/* exported reverseWord */

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

// reverseWord(word)
// reverses order of characters in a string

// -create a new empty string, reverse
// -for every character
//   - starting from last character
//     - access given word, take the character, and add it to the string reverse
// -return reverse
