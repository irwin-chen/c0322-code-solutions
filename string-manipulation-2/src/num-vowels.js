/* exported numVowels */

function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}

// numVowels(string)
// take in argument string, return the number of vowels within the string
// - create new var to track the vowel count
// - for each character in the string
//   - lower case the letter and check to see if it is a vowel
//   - if it is, increase count
// - return vowel count at the end
