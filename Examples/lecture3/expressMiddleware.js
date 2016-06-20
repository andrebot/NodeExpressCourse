'use strict';

const express = require('express');
const app = express();

app.use(function(request, response, next){
  const start = new Date();
  const url = request.url;
  const method = request.method;

  response.on('finish', function(){
    const duration = +new Date() - start;
    const message = `${method} to ${url} \ntook ${duration} ms \n\n`;
    console.log(message);
  });

  next();
});

app.use(express.static('public'));

app.listen(8080, function(){
  console.log('Listening on port 8080...');
});