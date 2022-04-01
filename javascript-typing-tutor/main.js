var $text = document.querySelectorAll('span');
var $button = document.querySelector('button');
var $accuracy = document.querySelector('.accuracy-text');
var $p = document.querySelector('p');
var wordBank = ['tudor', 'trial', 'error', 'css', 'JavaScript', 'kappa', 'smadge', 'template', 'correct', 'hidden', 'text', 'align', 'justify', 'height'];

var counter = 0;
var wrong = 0;
var keystroke = 0;

document.addEventListener('keydown', function (event) {
  keystroke++;
  rightOrWrong(event);

  if (counter === $text.length) {
    checkAccuracy();
    $button.classList.remove('hidden');
  }
});

$button.addEventListener('click', function () {
  $text[0].className = 'current-letter';
  for (var i = 1; i < $text.length; i++) {
    $text[i].classList.remove('correct');
  }
  counter = 0;
  wrong = 0;
  keystroke = 0;
  $button.classList.add('hidden');
  $accuracy.classList.add('hidden');
  // word randomiser
  scramble();
});

function rightOrWrong(event) {
  if (event.key === $text[counter].textContent) {
    $text[counter].className = 'correct';
    counter++;
    if (counter < $text.length) {
      $text[counter].className = 'current-letter';
    }
  } else {
    $text[counter].className = 'incorrect current-letter';
    wrong++;
  }
}

function checkAccuracy() {
  var accuracy = Math.round((1 - (wrong / keystroke)) * 100);
  $accuracy.textContent = 'Accuracy: ' + accuracy + '%';
  $accuracy.classList.remove('hidden');
}

function scramble() {
  var string = wordBank[Math.trunc(Math.random() * wordBank.length)];
  for (var i = 1; i < 5; i++) {
    string += ' ' + wordBank[Math.trunc(Math.random() * wordBank.length)];
  }
  for (var x = 0; x < $text.length; x++) {
    $text[x].remove();
  }

  for (var y = 0; y < string.length; y++) {
    var $temp = document.createElement('span');
    $temp.textContent = string[y];
    $p.appendChild($temp);
  }
  $text = document.querySelectorAll('span');
  document.querySelector('span').className = 'current-letter';
}
