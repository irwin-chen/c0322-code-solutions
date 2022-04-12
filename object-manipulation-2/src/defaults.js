/* exported defaults */

function defaults(target, source) {
  if (Object.keys(target).length === 0) {
    Object.assign(target, source);
  } else {
    for (var sourceProperty in source) {
      var counter = 0;
      for (var targetProperty in target) {
        if (targetProperty !== sourceProperty) {
          counter++;
          if (counter === Object.keys(target).length) {
            target[sourceProperty] = source[sourceProperty];
          }
        }
      }
    }
  }
}

// defaults(target, source)
// compares properties of both the target and source argument objects, any missing properties from the target object and pulled from the source object
// - create array of properties from the target object
// - create an array of properties from the source object
// - check if target array length is 0
//   - if so, copy over the source object to the target object
//   - for each index of the source array
//     - create a variable counter to check how many times the word is not in the target array index
//     - for each index of the target array
//       - compare the source property at that index to see if they can be found in the target array
//         - if not, increase the counter
//           - if the target array loop finishes without matching a single word
//             - the property and property value from the source is pushed into the target object
