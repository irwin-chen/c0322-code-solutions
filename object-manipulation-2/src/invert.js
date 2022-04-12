/* exported invert */

function invert(source) {
  var result = {};
  for (var property in source) {
    var value = source[property];
    result[value] = property;
  }
  return result;
}

// invert(source)
// takes in a source object as an argument, switches the positions of the key property and values, so that the values become the properties and vice versa
// - create new object to hold the results
// - for each property in source object
//   - create a new variable to hold the value of that property
//   - create a new property in the result object using that variable and assign it a value of the property
// - return a result
