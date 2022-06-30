/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  if (stack.peek() !== undefined) {
    max = stack.pop();
    while (stack.peek() !== undefined) {
      if (stack.peek() > max) {
        max = stack.pop();
      } else {
        stack.pop();
      }
    }
  }
  return max;
}
