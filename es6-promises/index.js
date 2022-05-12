const takeAChance = require('./take-a-chance');

const obj = takeAChance('Irwin');

obj.then(win => {
  console.log(win);
});

obj.catch(function (error) {
  console.error(error.message);
});
