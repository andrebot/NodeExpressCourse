'use strict';

const EventEmitter = require('events').EventEmitter;

class Logger extends EventEmitter {
  constructor () {
    super();
  }
}

const logger = new Logger();

console.log('this is logger', logger);

logger.on('error', function(message){
  console.log('Error: ' + message);
});

logger.emit('error', 'All your base are belong to us.');