/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const min = queue.dequeue();
    if (queue.peek() !== undefined) {
      if (queue.peek() < min) {
        queue.enqueue(min);
        return queue.dequeue();
      } else {
        const secondValue = queue.dequeue();
        queue.enqueue(secondValue);
        return min;
      }
    } else {
      return min;
    }
  }
}
