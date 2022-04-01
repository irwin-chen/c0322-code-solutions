/* exported isPalindromic */
function isPalindromic(string) {
  var spacelessWord = string.replaceAll(' ', '');
  var half = Math.trunc(spacelessWord.length / 2);
  if (spacelessWord % 2 === 1) {
    spacelessWord = spacelessWord.substring(0, half) + spacelessWord.substring(half + 1);
  }
  var firstHalf = spacelessWord.substring(0, half);
  var secondHalf = spacelessWord.substring(half);
  var secondFlipped = '';

  for (var wordIndex = secondHalf.length - 1; wordIndex >= 0; wordIndex--) {
    secondFlipped += secondHalf[wordIndex];
  }

  for (var checkIndex = 0; checkIndex < firstHalf.length; checkIndex++) {
    if (firstHalf[checkIndex] !== secondFlipped[checkIndex]) {
      return false;
    }
  }
  return true;
}
