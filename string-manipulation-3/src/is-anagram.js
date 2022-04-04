/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var stringOne = firstString.replaceAll(' ', '');
  var stringTwo = secondString.replaceAll(' ', '');

  var arrayOne = stringOne.split('');
  var arrayTwo = stringTwo.split('');

  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  for (var indexOne = 0; indexOne < arrayOne.length; indexOne++) {
    var check = arrayTwo.indexOf(arrayOne[indexOne]);
    if (check === -1) {
      return false;
    }
    arrayTwo.splice(check, 1);
    if (arrayTwo.length === 0) {
      return true;
    }

  }
}

// isAnagram(firstString, secondString)
// takes in two argument strings, checks to see if the second string is an anagram of the first one
// returns a boolean value
// - create two new variables, one for each argument string
//   - remove any space characters within the two argument strings
// - create new arrays
//   - one for each of the two resulting strings without spaces
// - check if the string length of the two arguments are the same
//   - if Notification, return false
// - for each character of string one
//   - check to see if the character is found inside arrayTwo, and assign the index number to a new variable
//   - if the character does not exist
//     - return false
//   - take the second array and splice remove that character from the array
//   - if the arrayTwo becomes empty because all the letters match
//     - return true
