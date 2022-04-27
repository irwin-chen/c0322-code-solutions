var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $dots = document.querySelectorAll('.fa-circle');
var $dotsContainer = document.querySelector('.dotsContainer');
var $image = document.querySelectorAll('img');
var counter = 0;

$leftArrow.addEventListener('click', arrow);
$rightArrow.addEventListener('click', arrow);

for (var i = 0; i < $dots.length; i++) {
  $dots[i].setAttribute('number', i);
  $image[i].setAttribute('number', i);
}

function arrow(event) {
  clearInterval(int);
  if (event.target === $leftArrow) {
    counter -= 2;
  }
  switchView();
  int = setInterval(switchView, 3000);
}

function switchView() {
  counter++;
  if (counter === -1) {
    counter = 4;
  }
  if (counter === 5) {
    counter = 0;
  }
  view();
}

function view() {
  for (var i = 0; i < $dots.length; i++) {
    var index = $dots[i].getAttribute('number');
    if (parseInt(index) === counter) {
      $dots[i].className = 'fas fa-circle fa-lg margin-between';
      $image[i].className = '';
    } else {
      $dots[i].className = 'far fa-circle fa-lg margin-between';
      $image[i].className = 'inactive';
    }
  }
}

$dotsContainer.addEventListener('click', function (event) {
  if (event.target.matches('i')) {
    clearInterval(int);
    var target = event.target.getAttribute('number');
    counter = parseInt(target);
    view();
    int = setInterval(switchView, 3000);
  }
});

var int = setInterval(switchView, 3000);
