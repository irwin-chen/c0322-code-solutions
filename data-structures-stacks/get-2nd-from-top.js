/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let topOfStack;
  if (stack.peek() !== undefined) {
    topOfStack = stack.pop();
    if (stack.peek() !== undefined) {
      const secondFromTop = stack.peek();
      let nextInStack;
      stack.push(topOfStack);
      while (stack.peek() !== topOfStack) {
        nextInStack = stack.pop();
        stack.push(nextInStack);
      }
      return secondFromTop;
    } else {
      stack.push(topOfStack);
    }
  }

}
