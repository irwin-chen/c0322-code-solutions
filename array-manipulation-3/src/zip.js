/* exported zip */

function zip(first, second) {

  var resultArray = [];
  var smallerLength = 0;

  if (first.length > second.length) {
    smallerLength = second.length;
  } else {
    smallerLength = first.length;
  }

  for (var arrayIndex = 0; arrayIndex < smallerLength; arrayIndex++) {
    var tempArray = [];
    tempArray.push(first[arrayIndex], second[arrayIndex]);

    resultArray.push(tempArray);
  }
  return resultArray;
}
