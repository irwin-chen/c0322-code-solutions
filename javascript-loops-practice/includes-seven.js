/* exported includesSeven */

function includesSeven(array) {
  var count = 0;
  while (count < array.length) {
    if (array[count] === 7) {
      return true;
    } else {
      count++;
    }
  }
  return false;
}
