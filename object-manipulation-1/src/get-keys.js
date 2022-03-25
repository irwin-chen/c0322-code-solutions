/* exported getKeys */

function getKeys(object) {
  var keys = [];
  for (var prop in object) {
    keys.push(prop);
  }
  return keys;
}

// getKeys(object)
// grabs the property keys of an object, puts them in an Array
// -create an empty array called keys
//   - for every property in the object
//     - pushthe property into the new array
// -return keys array
