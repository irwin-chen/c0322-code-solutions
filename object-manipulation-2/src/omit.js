/* exported omit */

function omit(source, keys) {
  var result = {};
  for (var property in source) {
    var counter = 0;
    for (var keysIndex = 0; keysIndex < keys.length; keysIndex++) {
      if (property !== keys[keysIndex]) {
        counter++;
        if (counter === keys.length) {
          result[property] = source[property];
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
// - for each property in the source Object
//   - initialize a new variable at 0, to keep track of how many times the counter loops
//   - for each index in the keys array
//     - check if the property in teh source is found in the keys array
//       - if not, increase the counter by one
//         - if the property is not found in the keys array
//           - move the property and its corresponding value to the result object
// - return the new object from the function
