'use strict';

//Remove the comment from the line below to import winston to this file
//var log = require('./winstonConfig.js');

const logMsg = function (msg) {
  console.log(msg);

  //Remove the comment from the line below to use the imported function
  //log.info(msg);
};

const Dog = (name) => {
  const _name = name;

  return {
    whoIsAGoodBoy: () => logMsg(`${_name} is a good boy!`),
    wiggle: () => logMsg(`${_name} is wiggling.`)
  }
};

const brian = Dog('Brian');

brian.whoIsAGoodBoy();
brian.wiggle();