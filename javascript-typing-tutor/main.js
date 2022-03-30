var $text = document.querySelectorAll('span');
var counter = 0;
var check = null;
var wrong = 0;
var keystroke = 0;

document.addEventListener('keydown', function (event) {
  keystroke++;
  if (event.key === $text[counter].textContent) {
    check = true;
  } else {
    check = false;
  }
  rightOrWrong();

  if (counter === $text.length) {
    checkAccuracy();
    document.querySelector('button').classList.remove = 'hidden';
  }
});

function rightOrWrong() {
  if (check) {
    $text[counter].className = 'correct';
    counter++;
    if (counter < $text.length) {
      $text[counter].className = 'current-letter';
    }

  } else if (!check) {
    $text[counter].className = 'incorrect current-letter';
    wrong++;
  }
}

function checkAccuracy() {
  var $accuracy = document.querySelector('.accuracy-text');
  var accuracy = Math.round((1 - (wrong / keystroke)) * 100);
  $accuracy.textContent = 'Accuracy: ' + accuracy + '%';
  $accuracy.getClass = 'accuracy-text';
}
