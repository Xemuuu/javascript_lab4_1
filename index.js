'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);
  const area = (Math.PI * r * r).toFixed(2);
  const circumference = (2 * Math.PI * r).toFixed(2);
  res.json({ area, circumference });
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);
  const area = width * height;
  const perimeter = 2 * (width + height);
  res.json({ area, perimeter });
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});