/* exported getLength */

function getLength(list) {
  let node = list;
  let counter = 0;
  while (node !== null) {
    node = node.next;
    counter++;
  }
  return counter;
}
