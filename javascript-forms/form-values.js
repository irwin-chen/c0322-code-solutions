var $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var formSubmit = {};
  formSubmit.name = $form.elements.name.value;
  formSubmit.email = $form.elements.email.value;
  formSubmit.message = $form.elements.message.value;

  console.log('Submitted:', formSubmit);
});
