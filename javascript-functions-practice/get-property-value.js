/* exported getPropertyValue */
function getPropertyValue(object, key) {
  var property = Object.getOwnPropertyDescriptor(object, key);
  var propertyValue = property.value;
  return propertyValue;
}
