'use strict';

//Remove the comment from the line below to import winston to this file
//var log = require('./winstonConfig.js');

const logMsg = function (msg) {
  console.log(msg);

  //Remove the comment from the line below to use the imported function
  //log.info(msg);
};

const Dog = function (name) {
  //if you want to change the value of this variable in any function, this should be a 'let' instead of 'const'
  const _name = name;

  this.whoIsAGoodBoy = function () {
    logMsg(_name + ' is a good boy!');
  };

  this.wiggle = function () {
    logMsg(_name + ' is wiggling.');
  };
}

const brian = new Dog('Brian');

brian.whoIsAGoodBoy();
brian.wiggle();
