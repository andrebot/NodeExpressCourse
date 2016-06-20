'use strict';

const Dog = (name) => {
  let _name = name;

  return {
    whoIsAGoodBoy: () => `${_name} is a good boy!`,
    wiggle: () => `${_name} is wiggling.`,
    getName: () => _name,
    setName: name => _name = name
  }
};

module.exports = Dog;
