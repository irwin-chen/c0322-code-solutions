var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event.target:', typeof event.target);
  console.log('event.target.tagName:', typeof event.target.tagName);
  if (event.target.matches('button')) {
    var $target = event.target.closest('.task-list-item');
    console.log('closest .task-list-item:', $target);
    $target.remove();
  }
});
