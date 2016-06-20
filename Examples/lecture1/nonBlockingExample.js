'use strict';

const fs = require('fs');

console.log('Before reading file');

fs.readFile('../lorem.txt', 'utf8', function(err, contents) {
    console.log('Inside reading file');

    console.log(contents);
});

console.log('After reading file');