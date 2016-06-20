'use strict';

const http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write('I\'m alive, wait and see...');

  setTimeout(function(){
    response.write('Took me 5 seconds to finish.');
    response.end();
  }, 5000);

  response.write('Not yet done.');
}).listen(8080, function(){
  console.log('Listening on port 8080...');
});