var $text = document.querySelectorAll('span');
var counter = 0;
var check = null;

document.addEventListener('keydown', function (event) {
  $text[counter].className = 'current-letter';
  if (event.key === $text[counter].textContent) {
    check = true;
  } else {
    check = false;
  }
  rightOrWrong();

});

function rightOrWrong() {
  if (check) {
    $text[counter].className = 'correct';
    counter++;
    $text[counter].className = 'current-letter';
  } else if (!check) {
    $text[counter].className = 'incorrect current-letter';
  }
}
