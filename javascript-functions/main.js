function convertMinutestoSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var seconds = convertMinutestoSeconds(5);
console.log('Number of Seconds:', seconds);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greeting = greet('Beavis');
console.log('Greeting:', greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var area = getArea(17, 42);
console.log('Area:', area);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First Name:', firstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last Element:', lastElement);
