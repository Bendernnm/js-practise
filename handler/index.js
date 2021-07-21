const express = require('express');

const handler = require('./handler');

const app = express();
const port = 6006;

app.get('/', handler);

app.listen(port, () => {
  console.log(`Started listening on http://localhost:${port}`);
});