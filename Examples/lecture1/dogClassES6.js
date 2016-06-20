'use strict';

//Remove the comment from the line below to import winston to this file
//var log = require('./winstonConfig.js');

const logMsg = function (msg) {
  console.log(msg);

  //Remove the comment from the line below to use the imported function
  //log.info(msg);
};

class Dog {
  constructor (name) {
    this._name = name;
  }

  whoIsAGoodBoy () {
    logMsg(`${this._name} is a good boy!`);
  }

  wiggle () {
    logMsg(`${this._name} is wiggling`);
  }
}

const brian = new Dog('Brian');

brian.whoIsAGoodBoy();
brian.wiggle();