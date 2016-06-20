'use strict';

const express = require('express');
const Dog = require('./dogObjComposition');
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extend: false});
const app = express();
let dogs = [
  Dog('Brian'),
  Dog('Tina Turner'),
  Dog('Puppy 1'),
  Dog('Puppy 2'),
  Dog('Puppy 3')
];

app.route('/goodDog/:doggyId')
  .get(function (request, response) {
    const doggyId = request.params.doggyId;

    if(doggyId && doggyId < dogs.length) {
      response.send(dogs[doggyId].whoIsAGoodBoy());
    } else {
      response.sendStatus(403);
    }
  });

app.route('/wiggle/:doggyId')
  .get(function (request, response) {
    const doggyId = request.params.doggyId;

    if(doggyId && doggyId < dogs.length) {
      response.send(dogs[doggyId].wiggle());
    } else {
      response.sendStatus(403);
    }
  });

app.route('/dog')
  .post(parseUrlencoded, function (request, response) {
    const data = request.body;

    if(data){
      const newDog = Dog(data.name);

      dogs.push(newDog);

      response.status(201).send(`Dog ${data.name} added! Brian loved it.`);
    } else {
      response.sendStatus(403);
    }
  })
  .put(parseUrlencoded, function (request, response) {
    const data = request.body;

    if (data && data.index && data.name){
      const dog = dogs[data.index];
      dog.setName(data.name);

      response.send(`Dog #${data.index} had its name changed to ${dog.getName()}`);
    } else {
      response.sendStatus(403);
    }
  });

app.route('/dog/:doggyId')
  .delete(function (request, response) {
    const doggyId = request.params.doggyId;

    if (doggyId && doggyId < dogs.length) {
      const removed = dogs.splice(doggyId);

      response.send(`Dog #${doggyId} was removed. Now we have ${dogs.length} dogs.`);
    } else {
      response.sendStatus(403);
    }
  });

app.listen(8080, function () {
  console.log('Listening on port 8080...');
});