/* exported reverseWords */

function reverseWords(string) {
  var reversedResult = '';
  var split = string.split(' ');
  for (var arrayIndex = 0; arrayIndex < split.length; arrayIndex++) {
    var tempString = '';
    var tempWord = split[arrayIndex];
    for (var wordIndex = split[arrayIndex].length - 1; wordIndex >= 0; wordIndex--) {
      tempString += tempWord[wordIndex];
    }
    reversedResult += tempString + ' ';
  }
  return reversedResult.trimEnd();
}

// reverseWords(string)
// takes a string and reverses the letters in each word, but not the order of the words
// - create a new string to hold the result string
// - break up the string into separate words
// - for each array index
//   - create a new string to hold the backwards word
//   - create a new string to hold the word at that array index
//   - for each letter of the word
//     - place it into the temp string starting from teh last Character
//   - add the completed reverse word to the result string with a character space at the end
// - return the finished result string and trim any excess white space from the end of the string
