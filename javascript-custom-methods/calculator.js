/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
      sum += numbers[numbersIndex];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var sum = 0;
    for (var numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
      sum += numbers[numbersIndex];
    }
    return sum / numbers.length;
  }
};
