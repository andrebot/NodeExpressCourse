'use strict';

const express = require('express');
const dogRoute = require('./dogRoute');
const goodDogRoute = require('./goodDogRoute');
const wiggleRoute = require('./wiggleRoute');
const app = express();

app.use('/dog', dogRoute);
app.use('/goodDog', goodDogRoute);
app.use('/wiggle', wiggleRoute);

module.exports = app.listen(8080, function () {
  console.log('Listening on port 8080...');
});
