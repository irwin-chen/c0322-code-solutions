const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

let [, , x, cond, y] = process.argv;
x = Number(x);
y = Number(y);

if (cond === 'plus') {
  console.log('Result: ', add(x, y));
} else if (cond === 'minus') {
  console.log('Result: ', subtract(x, y));
} else if (cond === 'over') {
  console.log('Result: ', divide(x, y));
} else if (cond === 'times') {
  console.log('Result: ', multiply(x, y));
}
