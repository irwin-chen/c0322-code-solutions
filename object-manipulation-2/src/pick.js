/* exported pick */

function pick(source, keys) {
  var results = {};
  for (var i = 0; i < keys.length; i++) {
    var tempArray = Object.keys(source);
    for (var x = 0; x < tempArray.length; x++) {
      if (tempArray[x] === keys[i]) {
        results[keys[i]] = source[keys[i]];
      }
    }
  }
  return results;
}

// pick(source, keys)
// creates an object with the key properties specified in the keys array from a source object
// - create empty object to hold the results
//   - for each key property in the array
//     - find the corresponding value inside the object
//     - create the same property inside the new object, assign the value from the source object
// - return the results of the new object from the function
