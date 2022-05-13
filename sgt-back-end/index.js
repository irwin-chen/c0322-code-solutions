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
app.post('/api/grades', (req, res) => { // uh oh time to change this so it doesnt rely on order
  const params = [req.body.name, req.body.course, req.body.score];
  for (let i = 0; i < params.length; i++) {
    if (params[i] === '' || req.body.score === undefined || req.body.course === undefined || req.body.name === undefined) {
      res.status(400).json({
        error: 'Please enter a valid grade entry'
      });
      return;
    }
  }
  req.body.score = Number(req.body.score);
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
  db.query(sql, params)
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
  const gradeId = Number(req.params.id);
  const params = [req.body.name, req.body.course, req.body.score, gradeId];
  if (!gradeId) {
    res.status(400).send({
      error: 'invalid gradeId, please enter an integer greater than 0'
    });
    return;
  }
  for (let i = 0; i < params.length; i++) {
    if (params[i] === '' || req.body.score === undefined || req.body.course === undefined || req.body.name === undefined) {
      res.status(400).json({
        error: 'Please enter a valid grade entry'
      });
      return;
    }
  }
  req.body.score = Number(req.body.score);
  if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'Please enter a number between 0 and 100 for the score'
    });
    return;
  }
  const sql = `
  update "grades"
     set "name" = $1,
         "course" = $2,
         "score" = $3
   where "gradeId" = $4
   returning *
  `;
  db.query(sql, params)
    .then(result => {
      const queryResult = result.rows[0];
      if (!queryResult) {
        res.status(404).json({
          error: `No entry with 'gradeId' ${gradeId}`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 connected');
});
