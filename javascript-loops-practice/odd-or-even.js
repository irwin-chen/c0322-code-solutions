/* exported oddOrEven */

function oddOrEven(numbers) {
  var list = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      list.push('even');
    }
    if (numbers[i] % 2 === 1) {
      list.push('odd');
    }
  }
  return list;
}
