/* exported defaults */

function defaults(target, source) {
  var targetArray = Object.keys(target);
  var sourceArray = Object.keys(source);

  if (targetArray.length === 0) {
    Object.assign(target, source);
  }
  for (var sourceIndex = 0; sourceIndex < sourceArray.length; sourceIndex++) {
    var counter = 0;
    for (var targetIndex = 0; targetIndex < targetArray.length; targetIndex++) {
      if (targetArray[targetIndex] !== (sourceArray[sourceIndex])) {
        counter++;
        if (counter === targetArray.length) {
          target[sourceArray[sourceIndex]] = Object.values(source)[sourceIndex];
        }
      }
    }
  }
}

// defaults(target, source)
// compares properties of both the target and source argument objects, any missing properties from the target object and pulled from the source object
// - create array of properties from the target object
// - create an array of properties from the source object
//   - for each index of the source array
//     - create a variable counter to check how many times the word is not in the target array index
//     - for each index of the target array
//       - compare the source property at that index to see if they can be found in the target array
//         - if not, increase the counter
//           - if the target array loop finishes without matching a single word
//             - the property and property value from the source is pushed into the target object
