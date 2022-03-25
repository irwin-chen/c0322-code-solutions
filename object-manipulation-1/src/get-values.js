/* exported getValues */

function getValues(object) {
  var values = [];
  for (var props in object) {
    values.push(object[props]);
  }
  return values;
}

// getValues(object)
// grab the values of an object,place into new Array
// - create new Array
//   - for every property key in an object
//     - use bracket notationto grab its corresponding value, push value into Array
// -return new array
