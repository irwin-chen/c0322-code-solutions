/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const hang = list.next.next;
    list.next = hang;
  }
}
