const takeAChance = require('./take-a-chance');

const obj = takeAChance('Irwin');

obj.then(win => {
  console.log(win);
});

obj.catch(error => {
  console.log(error.message);
});
