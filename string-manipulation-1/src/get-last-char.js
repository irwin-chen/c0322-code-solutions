/* exported getLastChar */

function getLastChar(string) {
  var lastChar = string[string.length - 1];
  return lastChar;
}

// getLastChar(string)
// input: 'Java' output: 'a'
// - create var lastChar
// - find length of string
//   - apply length of string - 1 to string to account for index count
//   - resulting value assinged to lastChar
// - return lastChar
