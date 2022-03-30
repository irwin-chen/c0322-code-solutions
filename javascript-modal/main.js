var $modal = document.querySelector('.modal-button');
var $no = document.querySelector('.no-button');
var $popUp = document.querySelector('.pop-up');

$modal.addEventListener('click', function (event) {
  $popUp.className = 'pop-up';
});

$no.addEventListener('click', function (event) {
  $popUp.className = 'pop-up hidden';
});
