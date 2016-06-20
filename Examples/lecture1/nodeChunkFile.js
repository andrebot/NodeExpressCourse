'use strict';

const http = require('http');

http.createServer((request, response) => {
  let dataReceived = '';

  request.setEncoding('utf8');

  request.on('data', (chunk) => {
    console.log('Got a chunk of the data being sent');

    dataReceived += chunk;
  });

  request.on('end', () => {
    console.log(dataReceived);

    response.write('Thanks for sharing!');
    response.end();
  });
}).listen(8080, () => {
  console.log('Listening on port 8080...');
});
