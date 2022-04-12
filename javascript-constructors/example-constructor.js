function ExampleConstructor() {
  console.log('ExampleConstructor prototype value:', ExampleConstructor.prototype);
  console.log('ExampleConstructor prototype typeof:', typeof ExampleConstructor.prototype);
}

var newConstructor = new ExampleConstructor();
console.log('newConstructor:', newConstructor);

var instanceOf = newConstructor instanceof ExampleConstructor;
console.log('is instanceOf:', instanceOf);
