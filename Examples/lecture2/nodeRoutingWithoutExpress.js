'use strict';

const http = require('http');
const Dog = require('./dogObjComposition');
const brian = Dog('Brian');

const respondClient = function (response, msg) {
  response.writeHead(200);
  response.write(msg);
  response.end();
};

http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/goodDog') {
    respondClient(response, brian.whoIsAGoodBoy());
  } else if (request.method === 'GET' && request.url === '/wiggle') {
    respondClient(response, brian.wiggle());
  } else {
    response.writeHead(404);
    response.end();
  }
}).listen(8080, () => {
  console.log('Listening on port 8080...');
});
