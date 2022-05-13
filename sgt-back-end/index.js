const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
`;
  db.query(sql)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred.'
      });
    });
});

app.use(express.json());
app.post('/api/grades', (req, res) => {
  const gradeEntry = req.body;
  const entryValues = [];
  for (const prop in gradeEntry) {
    entryValues.push(gradeEntry[prop]);
  }
  for (let i = 0; i < entryValues.length; i++) {
    if (entryValues[i] === '' || gradeEntry.score === undefined || gradeEntry.course === undefined || gradeEntry.name === undefined) {
      res.status(400).json({
        error: 'Please enter a valid grade entry'
      });
      return;
    }
  }
  gradeEntry.score = Number(req.body.score);
  if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'Please enter a number between 0 and 100 for the score'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  db.query(sql, entryValues)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'an unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:id', (req, res) => {
  const gradeId = req.body.id;
  const [,, x, y, z] = req.body;
  const sql = `
  update "grades"
     set "name" = $1
         "course" = $2
         "score" = $3
   where "
  `;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 connected');
});
