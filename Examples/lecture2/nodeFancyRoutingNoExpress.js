'use strict';

const http = require('http');
const Dog = require('./dogObjComposition');
const brian = Dog('Brian');

const respondClient = function (response, msg) {
  response.writeHead(200);
  response.write(msg);
  response.end();
};

const routes = {
  'GET': {
    '/goodDog': (request, response) => respondClient(response, brian.whoIsAGoodBoy()),
    '/wiggle': (request, response) => respondClient(response, brian.wiggle()) 
  }
};

http.createServer((request, response) => {
  try {
    const route = routes[request.method][request.url];

    if (route) {
      route(request, response);
    } else {
      throw new Error('No matching route');
    }
  } catch (error) {
    console.log(error.message);

    response.writeHead(404);
    response.end();
  }
}).listen(8080, () => {
  console.log('Listening on port 8080...');
});
