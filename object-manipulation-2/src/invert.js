/* exported invert */

function invert(source) {
  var result = {};
  var propertyArray = Object.keys(source);
  var valuesArray = Object.values(source);

  for (var index = 0; index < propertyArray.length; index++) {
    result[valuesArray[index]] = propertyArray[index];
  }
  return result;
}

// invert(source)
// takes in a source object as an argument, switches the positions of the key property and values, so that the values become the properties and vice versa
// - create new object to hold the results
// - create a new array that holds all the key properties of the argument object
// - create a new array that holds all the values of the argument object
//   - for each index of either array (they should have the same length)
//     - assign the value of the property array at that index to the 'property' at the corresponding valuesArray index within the results object
// - return a result
