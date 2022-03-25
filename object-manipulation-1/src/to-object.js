/* exported toObject */

function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

// toObject(keyValuePair)
// takes in an array with a key value parseInt, then creates an object with the key value pair inside
// - create new object
//   - create new object property using given values from keyValuePair through bracket notation
//     - accesses property and value using array index
// -return new obj
