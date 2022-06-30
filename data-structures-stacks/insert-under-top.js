/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  let top;
  if (stack.peek() !== undefined) {
    top = stack.pop();
    stack.push(value);
    stack.push(top);
  }
}
