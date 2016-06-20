'use strict';

const express = require('express');
const app = express();

app.use('static', express.static('public'));

app.listen(8080, function(){
  console.log('Listening on port 8080...');
});
