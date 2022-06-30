/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const swappedList = list;
    const first = list.data;
    const second = list.next.data;
    swappedList.data = second;
    swappedList.next.data = first;
    return swappedList;
  }
  return list;
}
