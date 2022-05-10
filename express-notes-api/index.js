const data = require('./data.json');
const express = require('express');
const fs = require('fs');

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
    res.status(404).send({ error: `cannot find note with id ${id}` });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  if (!newEntry.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    newEntry.id = data.nextId;
    data.notes[data.nextId] = newEntry;
    data.nextId++;
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', updatedData, 'utf8', err => {
      if (err) {
        console.error({ error: 'An unexpected error occurred.' });
        res.sendStatus(500);
      } else {
        res.status(201).json(newEntry);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number(id) || Number(id) < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', updatedData, 'utf8', err => {
      if (err) {
        console.error({ error: 'An unexpected error occurred' });
        res.sendStatus(500);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('working');
});
