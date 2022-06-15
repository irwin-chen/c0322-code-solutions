/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() !== undefined) {
    const initial = queue.dequeue();
    if (queue.peek() !== undefined) {
      if (initial <= queue.peek()) {
        return initial;
      } else {
        queue.enqueue(initial);
        while (queue.peek() !== initial) {
          const top = queue.dequeue();
          if (top <= queue.peek()) {
            return top;
          } else {
            queue.enqueue(top);
          }
        }
      }
    } else {
      return initial;
    }
  }
}
