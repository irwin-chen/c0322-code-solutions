const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const entries in grades) {
    gradesArray.push(grades[entries]);
  }
  res.json(gradesArray);
});

app.use(express.json());
app.post('/api/grades', (req, res) => {
  const entry = req.body;
  entry.id = nextId;
  grades[nextId] = entry;
  nextId++;
  res.status(201).send(entry);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Successfully Connected');
});
