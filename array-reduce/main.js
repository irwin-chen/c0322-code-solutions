const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, curr) => prev + curr);
console.log(sum);

const product = numbers.reduce((prev, curr) => prev * curr);
console.log(product);

const init = 0;
const balance = account.reduce(function (prev, curr) {
  if (curr.type === 'deposit') {
    return prev + curr.amount;
  } else {
    return prev - curr.amount;
  }
}, init);
console.log(balance);

const obj = {};
const composite = traits.reduce(function (prev, curr) {
  return Object.assign(prev, curr);
}, obj);
console.log(obj);
