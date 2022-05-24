const arr = [];
fetch('https:://jsonplaceholder.tpicode.com/users')
  .then(response => response.json())
  .then(data => {
    arr.push(data);
  });
console.log(arr);
