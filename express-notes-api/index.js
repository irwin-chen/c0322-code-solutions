const data = require('./data.json');
const express = require('express');

const app = express();

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const entries in data.notes) {
    notesArray.push(data.notes[entries]);
  }
  res.status(200).send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
  if (id >= 0 && data.notes[id] !== undefined) {
    res.status(200).json(data.notes[id]);
  } else {
    res.status(404).send({ error: 'cannot find note with id' });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (req.body === {}) {
    res.status(400).send({ error: 'content is a required field' });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('working');
});
