'use strict';

const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200);
  response.write('Thanks for sharing ...');

  request.on('readable', () => {
    let data = null;

    console.log('Reading');

    while (null !== (data = request.read())) {
      console.log(data.toString());
    }

  });

  request.on('end', () => {
    console.log('Ending');

    response.end();
  });

}).listen(8080,  () => {
  console.log('Listening on port 8080...');
});
