/* exported isVowel */

function isVowel(char) {
  if (char.toUpperCase() === 'A' || char.toUpperCase() === 'E' || char.toUpperCase() === 'I' || char.toUpperCase() === 'O' || char.toUpperCase() === 'U') {
    return true;
  } else {
    return false;
  }
}

// isVowel(char)
// takes character in, checks if it is a vowel or Notification, both upper and lower case
// -check if character is vowel
//   -make character upper case, check it against an uppercase vowel
//     -return true if true
//   -else
//     -return false
