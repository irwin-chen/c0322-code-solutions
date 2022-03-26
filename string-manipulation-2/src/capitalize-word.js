/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var firstChar = word[0].toUpperCase();
  var rest = word.slice(1).toLowerCase();
  return firstChar + rest;
}

// capitalizeWord(word)
// takes an argument string and capitilizes the first letter of the word, lower cases the rest of the word
// - lower case the argument word, check to see if it the word javascript,
//   - if so , return 'JavaScript'
// - create a new variable, store the first letter of the argument word upper case
// - create a new variable, store the rest of the argument in lower case
// - add the upper case letter to the rest of the lower case word, return the result
