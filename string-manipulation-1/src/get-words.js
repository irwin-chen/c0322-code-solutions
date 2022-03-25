/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

// getWords(string)
// get string, splits string with spaces between words into an array of seperate words
// -check to see if string is empty
//   -if empty string, return an empty array
// - split the string by targeting the empty spaces, return the resulting array
