'use strict';

const allowedMethods = ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'];
const allowedHeaders = ['Content-Type', 'Authorization', 'Content-Length'];

const CORSEnabler = function (request, response, next) {
  console.log('Configuring CORS');
  console.log(`Method ${request.method} from ${request.origin}`);

  if (allowedMethod.indexOf(request.method) > -1) {
    response.header('Access-Control-Allow-Origin', 'http://www.ae.com');
    response.header('Access-Control-Allow-Methods', allowedMethods.join(','));
    response.header('Access-Control-Allow-Headers', allowedHeaders.join(', '));
  }

  next();
}

module.exports = CORSEnabler;
