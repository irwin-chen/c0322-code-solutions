/* exported capitalize */

function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var restOfWord = word.toLowerCase();
  restOfWord = restOfWord.slice(1, word.length);
  var fullWord = firstLetter + restOfWord;
  return fullWord;
}

// capitalize(word)
// Takes in a word, uppercase first letter, lowercase the rest
// input: 'link' output: 'Link'
// -save string as new var
//   - apply lowercase to teh argument
//   - save new lowercased string as var
// - apply uppercase method to first char in string
//   - save as new var
// - slice off everything but first letter on lower-cased word
//   - add uppercase letter to rest of word, give it a new var
// - return variable with concatenated string
