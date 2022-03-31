var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabChange);

function tabChange(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target.textContent === $tab[i].textContent) {
        $tab[i].classList.add('active');
      } else {
        $tab[i].classList.remove('active');
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (i = 0; i < $view.length; i++) {
      if (dataView === $view[i].getAttribute('data-view')) {
        $view[i].classList.remove('hidden');
      } else {
        $view[i].classList.add('hidden');
      }
    }
  }
}
