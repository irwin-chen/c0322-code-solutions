var $counter = document.querySelector('.countdown-display');
var count = 3;

function counter() {
  if (count === 0) {
    $counter.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  } else {
    $counter.textContent = count;
  }
  count--;
}

var timer = setInterval(counter, 1000);
