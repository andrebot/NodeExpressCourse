'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const dogRoute = require('./dogRoute');
const goodDogRoute = require('./goodDogRoute');
const wiggleRoute = require('./wiggleRoute');
const app = express();

app.use(cookieParser());

app.use('/dog', dogRoute);
app.use('/goodDog', goodDogRoute);
app.use('/wiggle', wiggleRoute);
app.use('/login', loginRoute);
app.use('/login', loginRoute);

app.listen(8080, function () {
  console.log('Listening on port 8080...');
});
