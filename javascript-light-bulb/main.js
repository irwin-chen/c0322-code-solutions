var $circle = document.querySelector('.circle');
var $background = document.querySelector('body');
var lightOff = true;

$circle.addEventListener('click', function (event) {
  var lightSwitch = '';
  if (lightOff) {
    lightSwitch = 'light-on';
    lightOff = false;
  } else if (!lightOff) {
    lightSwitch = 'light-off';
    lightOff = true;
  }
  $circle.className = 'circle circle-' + lightSwitch;
  $background.className = 'background background-' + lightSwitch;
});
