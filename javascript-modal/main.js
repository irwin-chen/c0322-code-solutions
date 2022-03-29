var $modal = document.querySelector('.modal-button');
var $no = document.querySelector('.no-button');
var $popUp = document.querySelector('.pop-up');
var toggle = null;

$modal.addEventListener('click', function (event) {
  toggle = true;
  toggleOnOff();
});

$no.addEventListener('click', function (event) {
  toggle = false;
  toggleOnOff();
});

function toggleOnOff() {
  var x;
  if (toggle) {
    x = '';
  }
  if (!toggle) {
    x = ' hidden';
  }
  $popUp.className = 'pop-up' + x;
}
