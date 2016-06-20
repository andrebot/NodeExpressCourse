'use strict';

const fs = require('fs');

console.log('Before reading file');

const contents = fs.readFileSync('../lorem.txt', 'utf8');

console.log('After reading file');

console.log(contents);