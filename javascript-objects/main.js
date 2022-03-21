var student = {
  firstName: 'Irwin',
  lastName: 'Chen',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'lab tech';

console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

var vehicle = {
  make: 'Volkswagen',
  model: 'buggy',
  year: 1980
};

vehicle['color'] = 'yellow';
vehicle['isConvertible'] = false;

console.log('Vehicle Color:', vehicle['color']);
console.log('Is Convertible:', vehicle['isConvertible']);
console.log('Vehicle:', vehicle);

var pet = {
  name: 'Cat',
  type: 'dog'
};

delete pet.name;
delete pet['type'];

console.log('Pet:', pet);
