'use strict';

const express = require('express');
const app = express();
const dogRoute = require('./dogRoute');
const goodDogRoute = require('./goodDogRoute');
const wiggleRoute = require('./wiggleRoute');

app.use('/dog', dogRoute);
app.use('/goodDog', goodDogRoute);
app.use('/wiggle', wiggleRoute);

app.listen(8080, function(){
    console.log('Listening on port 8080...');
});
