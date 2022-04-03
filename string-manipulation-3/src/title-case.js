/* exported titleCase */

function titleCase(title) {
  var titleArray = title.split(' ');
  var resultString = '';

  for (var arrayIndex = 0; arrayIndex < titleArray.length; arrayIndex++) {
    var tempString = titleArray[arrayIndex].toLowerCase();
    var capitalized = tempString.slice(0, 1).toUpperCase() + tempString.slice(1) + ' ';
    var hyphen = tempString.indexOf('-');
    var colon = tempString.indexOf(':');

    if (colon !== -1) {
      var exception = arrayIndex + 1;
    }

    if (tempString.includes('javascript')) {
      resultString += 'JavaScript ';
      if (colon !== -1) {
        resultString = resultString.trimEnd() + ': ';
      }
    } else if (tempString.includes('api')) {
      resultString += 'API ';
      if (colon !== -1) {
        resultString = resultString.trimEnd() + ': ';
      }
    } else if (hyphen !== -1) {
      var beforeHyphen = tempString.slice(0, 1).toUpperCase() + tempString.slice(1, hyphen);
      var afterHyphen = tempString.slice(hyphen + 1);
      afterHyphen = afterHyphen.slice(0, 1).toUpperCase() + afterHyphen.slice(1);
      resultString += beforeHyphen + '-' + afterHyphen + ' ';
    } else if (arrayIndex === 0 || arrayIndex === exception) {
      resultString += capitalized;
    } else if (tempString === 'and' || tempString === 'or' || tempString === 'nor' || tempString === 'but' || tempString === 'as' || tempString === 'at' || tempString === 'by' || tempString === 'for' || tempString === 'in' || tempString === 'of' || tempString === 'on' || tempString === 'per' || tempString === 'to' || tempString === 'a' || tempString === 'an' || tempString === 'the') {
      resultString += tempString + ' ';
    } else {
      resultString += capitalized;
    }

  }
  return resultString.trimEnd();
}

// titleCase(string);
// takes a string and returns a string in apa format
// - split up all the words in the title, place them all into a new variable
// - create a new variable to hold the end result
//   - for each word
//     - turn the word into all lower case, store it in a new var
//     - take the word, and capitalize just the first Character, then assign it a new var
//     - create a new var to track if the current word has any hyphens
//     - create a new var to track if the current word has any colons
//     - if the current word does not have a colon
//       - create a new variable to hold the current iteration number of the for loop and add 1 to it
//     - check if the current word has the word javascript in it,
//       - if it does, push the string JavaScript with a space character after it (case-sensitive) to the result string
//         - chck if there is a colon on the current string
//           - if there is, trim the end of the string and add a colon and a space;
//     - check if the current word has API in it
//       - if So, push the string API with a space character after it to the result string
//         - check if hthere is a colon on the current string
//           - if there is, trim the end of the string and add a column and a blank space
//     - check if there is a hyphen in the current word
//       - if there is, take current string, uppercase the first letter and add it to the rest of the string before the hyphen
//       - take the other half after the hyphen
//       - capitalize the beginning of the word for the portion after the hyphen
//       - concatenate the two halves with a hyphen in the middle and assign it back to the result string
//     - check if there if the current word is at the beginning of the array or if the array is after a colon
//       - if so, capitalize the first letter of the word and add it back to the result string
//     - check the current word if it is any of the 16 hard coded lower case letters: and or nor but a an the as at by for in of on per to
//       - if so, add it to the result string in lower case letters
//     - for all other resultString
//       - capitalize the first letter of the word
// - at the bottom of the function, return the result string
