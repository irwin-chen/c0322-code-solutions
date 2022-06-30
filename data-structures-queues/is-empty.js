/* exported isEmpty */

function isEmpty(queue) {
  if (queue.peek() !== undefined) {
    return false;
  } else {
    return true;
  }
}
