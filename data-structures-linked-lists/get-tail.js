/* exported getTail */

function getTail(list) {
  let node = list;
  while (node !== null) {
    if (node.next === null) {
      return node.data;
    }
    node = node.next;
  }
}
