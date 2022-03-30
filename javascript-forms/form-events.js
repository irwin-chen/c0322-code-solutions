var $userName = document.querySelectorAll('input')[0];
var $userEmail = document.querySelectorAll('input')[1];
var $message = document.querySelector('textarea');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event target name:', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}
