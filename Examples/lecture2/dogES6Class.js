'use strict';

class Dog {
  constructor (name) {
    this._name = name;
  }

  whoIsAGoodBoy () {
    return `${this._name} is a good boy!`;
  }

  wiggle () {
    return `${this._name} is wiggling.`;
  }

  getName () {
    return this._name;
  }

  setName () {
    return this._name;
  }
}

module.exports = Dog;