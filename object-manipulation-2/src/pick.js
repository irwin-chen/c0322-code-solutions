/* exported pick */

function pick(source, keys) {
  // debugger;
  var results = {};
  var objArray = Object.keys(source);
  for (var i = 0; i < objArray.length; i++) {
    for (var x = 0; x < keys.length; x++) {
      if (objArray[i] === keys[x]) {
        if (source[keys[x]] !== undefined) {
          results[keys[x]] = source[keys[x]];
        }
      }
    }
  }
  return results;
}

// pick(source, keys)
// takes a js object and array as an argument, based on the array of keys (string values) provided, if the keys are found
// in the argument object, it takes that corresponding key and value and places them into a new object
// - create new object to hold the results
// - create a new array to hold the keys for the
//   - for each key in the sourc
//   - check if the array key exists in the argument source object
//     - check if the value at the key is undefined
//       - assign the value of that key to the same key property in the new object
// - return new object from the function
