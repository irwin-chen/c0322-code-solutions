var $circle = document.querySelector('.circle');
var $background = document.querySelector('body');
var counter = null;

$circle.addEventListener('click', function (event) {
  counter++;
  var lightSwitch = '';
  if (counter % 2 === 1) {
    lightSwitch = 'light-on';
  }
  if (counter % 2 === 0) {
    lightSwitch = 'light-off';
  }
  $circle.className = 'circle circle-' + lightSwitch;
  $background.className = 'background background-' + lightSwitch;
});
