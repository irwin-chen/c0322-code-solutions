var books = [
  {
    isbn: '18291825102',
    title: 'Getting Over It',
    author: 'Bennet Foddy'
  },
  {
    isbn: '18987127127',
    title: 'Kappa',
    author: 'Prime'
  },
  {
    isbn: '37612375178',
    title: 'JSON For Dummies',
    author: 'Unknown'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var jsonString = JSON.stringify(books);
console.log('jsonString:', jsonString);
console.log('typeof jsonString:', typeof jsonString);

var toConvert = '{"number id":"168000","name":"jimothy"}';
console.log('toConvert:', toConvert);
console.log('typeof toConvert:', toConvert);

var parsed = JSON.parse(toConvert);
console.log('parsed:', parsed);
console.log('typeof parsed:', typeof parsed);
