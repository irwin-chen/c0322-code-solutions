const express = require('express');
const app = express();
const path = require('path');

const jointPath = path.join(__dirname, 'public');

const rootPath = express.static(jointPath);

app.use(rootPath);

app.get('/:path', (req, res) => {
  res.status(200);
});

app.listen(3000, () => {
  console.log('Port 3000 open for work');
});
