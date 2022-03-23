// Math Object

var numOne = -3;
var numTwo = 83;
var numThree = 0;

var maximumValue = Math.max(numOne, numTwo, numThree);
console.log('Value of maximumValue:', maximumValue);

var heroes = ['flash', 'polka-dot man', 'saitama', 'king'];
var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

// Array Methods

var library = [
  {
    title: 'The Art of War',
    author: 'Sun Tzu'
  },
  {
    title: 'Getting over it with Bennet Foddy',
    author: 'Bennet Foddy'
  },
  {
    title: 'The Devotion of Suspect X',
    author: 'Keigo Higashino'
  }
];

var lastBook = library.pop(); // .pop pushes out last item
console.log('Value of lastBook:', lastBook);

var firstBook = library.shift(); // removes first item
console.log('Value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Raushchmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js); // adds in item to the back
library.unshift(css); // adds an item to the start
library.splice(1, 1); // removes item at that index

console.log('Value of library:', library);

// String Methods

var fullName = 'Irwin Chen';
var firstAndLastName = fullName.split(' '); // splits at indicator, spits out an array with individual strings based on the place split

console.log('Value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('Value of sayMyName:', sayMyName);
