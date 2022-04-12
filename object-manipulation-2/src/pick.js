/* exported pick */

function pick(source, keys) {
  var results = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i] && source[property] !== undefined) {
        results[property] = source[property];
      }
    }
  }
  return results;
}

// pick(source, keys)
// takes a js object and array as an argument, based on the array of keys (string values) provided, if the keys are found
// in the argument object, it takes that corresponding key and value and places them into a new object
// - create new object to hold the results
// - for each property in the source object
//   - check to see if the property name is found in the keys Array and check if the property value is not undefined
//   - if so, place the property and its corresponding value into the results object
// - return teh result
