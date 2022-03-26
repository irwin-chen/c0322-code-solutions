/* exported ransomCase */

function ransomCase(string) {
  var newString = string.toLowerCase();
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += newString[i];
    } else {
      ransom += newString[i].toUpperCase();
    }
  }
  return ransom;
}
