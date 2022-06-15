/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return queue.dequeue();
      } else {
        const next = queue.dequeue();
        queue.enqueue(next);
      }
    }
  }
}
