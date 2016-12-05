'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world from docker! \n');
});

app.listen(PORT);
console.log('Running inside container on http://localhost:' + PORT);
