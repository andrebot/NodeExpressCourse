'use strict';

const EventEmitter = require('events').EventEmitter;

const Logger = () => {
  return Object.assign({}, {
    events: new EventEmitter
  });
};

const logger = Logger();

logger.events.on('error', function(message){
  console.log('Error: ' + message);
});

logger.events.emit('error', 'All your base are belong to us.');
