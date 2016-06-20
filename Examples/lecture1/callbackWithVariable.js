'use strict';

const message = 'Hi I\'m inside the callback';

const callback = function () {
  console.log(message);
};

setTimeout(callback, 2000);

console.log('Waiting 2 seconds...');
