'use strict';

const winston = require('winston');

const coolLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'silly',
      colorize: true,
      timestamp: function() {
        return (new Date()).toISOString();
      }
    })
  ]
});

module.exports = coolLogger;
