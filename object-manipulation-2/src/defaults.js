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
// - check if the object is empty
//   - if so, copy over the source object properties into the target properties
//   - otherwise, for every property in the source object
//     - initialize a counter to 0
//     - for each property in the target object
//       - check if the target property and the source property match URLSearchParams
//         - if they dont, increase teh counter by one
//         - if the counter is equal to the number of entries in the target object
//           - push the "unused" property into the target object and give it its corresponding value
