/* exported unique */

function unique(array) {
  var uniqueArray = [];
  var shallowArray = array.slice();

  while (shallowArray.length > 0) {
    var uniqueWord = shallowArray[0];
    uniqueArray.push(uniqueWord);
    while (shallowArray.indexOf(uniqueWord) !== -1) {
      shallowArray.splice(shallowArray.indexOf(uniqueWord), 1);
    }
  }
  return uniqueArray;
}
