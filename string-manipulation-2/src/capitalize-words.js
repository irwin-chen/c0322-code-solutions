/* exported capitalizeWords */

function capitalizeWords(string) {
  var list = string.split(' ');
  var result = '';
  for (var i = 0; i < list.length; i++) {
    var temp = list[i].toLowerCase();
    var word = temp[0].toUpperCase() + temp.slice(1);
    if (i > 0) {
      result += ' ' + word;
    } else {
      result += word;
    }
  }
  return result;
}

// capitalizeWords(string);
// enter string of words, returned string of words have first letter capitalized and following letters lower case
// - split the argument string into seperate words, assign it to a new variable, this should create an array
// - create a new variable to hold the resulting words at the end
//   - for each word in the array of words created
//     - lower case all the letters, assign it to a new variable
//     - uppercase the first letter of the word, concatenate it with the rest of the word, save the result as a new variable
//     - check to see if there are multiple words in the array. if there are more than 1, add a space before the word, concatenate the whole thing to the result variable
//     - otherwise, only add the word variable to the result variable
// - return the string of words in the result variable
