'use strict';

const express = require('express');
const app = express();

app.get('/', function(request, response) {
    const msgStrings = ['First String', 'Second String'];
    // request.query is the query string. In this case we will return the
    // String present on the position msgStrings[index].
    // To test your server, use http://localhost:8080/?index=0
    const messageIndex = request.query.index;
    if(messageIndex && messageIndex < msgStrings.length) {
        response.send(msgStrings[messageIndex]);
    } else {
        response.sendStatus(403);
    }
});

app.listen(8080, function(){
    console.log('Listening on port 8080...');
});
