'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  console.log('GET was executed on http://localhost:' + PORT);
  res.send('Hello from docker! \n');
});

app.listen(PORT);
console.log('Running inside a docker container on http://localhost:' + PORT);
