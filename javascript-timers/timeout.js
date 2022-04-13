var $hello = document.querySelector('h1');

function message() {
  $hello.textContent = 'Hello There';
}

setTimeout(message, 2000);
