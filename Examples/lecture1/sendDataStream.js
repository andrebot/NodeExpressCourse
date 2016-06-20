'use strict';

const http = require('http');
const StringDecoder = require('string_decoder').StringDecoder;
const fs = require('fs');

const decoder = new StringDecoder('utf8');
const options = {
    host: 'localhost',
    port: 8080,
    path: '/',
    method: 'POST'
};

const request = http.request(options, function(response){
    response.on('data', function(data){
        console.log(decoder.write(data));
    });
});

let readStream = fs.createReadStream('../lorem.txt');

readStream.on('data', function (chunk) {
  request.write(chunk);
}).on('end', function () {
  request.end();
});

// This is the pipe version of the same code above
// readStream.on('end', function () {
//   request.end();
// });

// readStream.pipe(request);
