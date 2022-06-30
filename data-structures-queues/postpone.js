/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const top = queue.dequeue();
    queue.enqueue(top);
  }
}
