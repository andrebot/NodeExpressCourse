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

request.write('Are you alive?');
request.end();
