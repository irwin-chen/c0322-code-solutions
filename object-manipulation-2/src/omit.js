/* exported omit */

function omit(source, keys) {
  var result = {};
  var objArray = Object.keys(source);

  for (var objIndex = 0; objIndex < objArray.length; objIndex++) {
    var counter = 0;
    for (var keysIndex = 0; keysIndex < keys.length; keysIndex++) {
      if (keys[keysIndex] !== objArray[objIndex]) {
        counter++;
        if (counter === keys.length) {
          result[objArray[objIndex]] = Object.values(source)[objIndex];
        }
      }
    }
  }
  return result;
}

// omit(source, keys)
// checks argument source Object, checks if the values found in the argument array keys are found in the source Object,
// returns an object with only key property value pairs not found in the source object;
// - create a new object to hold the desired outcome (the key property/value pairs not found in the keys array)
// - create a new array consisting of the properties found inside the argument source object
// - for each index within the array of key properties inside the argument object
//   - create a new counter variable, this will count how many times the property is not found within the keys array
//   - for each index of the keys array
//     - check to see if the value of the Key array at that index matches the value of the object array at that object index
//       - if it does not, increase the counter
//         - if the counter reaches the the length of the keys array, that means the property was not specified in the keys array
//           - the property of the object array at that object index is placed in the result object, and then given its corresponding value in the obj index.
// - return the new object from the function
