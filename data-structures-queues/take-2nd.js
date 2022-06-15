/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const top = queue.dequeue();
    if (queue.peek() !== undefined) {
      queue.enqueue(top);
      return queue.dequeue();
    } else {
      return top;
    }
  }
}
