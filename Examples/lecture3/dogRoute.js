'use strict';

const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extend: false});
const express = require('express');
const router = express.Router();
const Dog = require('./Dog');
let dogs = require('./dogs');

router.route('/')
  .post(parseUrlencoded, function(request, response){
    const data = request.body;

    if(data){
      const newDog = Dog(data.name);

      dogs.push(newDog);

      response.status(201).send(`Dog ${data.name} added! Brian loved it.`);
    } else {
      response.sendStatus(403);
    }
  })
  .put(parseUrlencoded, function(request, response){
    const data = request.body;

    if (data && data.index && data.name) {
      if (data.index < dogs.length) {
        const dog = dogs[data.index];
        dog.setName(data.name);

        response.send(`Dog #${data.index} had its name changed to ${dog.getName()}`);
      } else {
        response.sendStatus(500);
      }
    } else {
      response.sendStatus(403);
    }
  });

router.route('/:doggyId')
  .delete(parseUrlencoded, function(request, response){
    const doggyId = request.params.doggyId;

    if (doggyId && doggyId < dogs.length) {
      const removed = dogs.splice(doggyId);

      response.send(`Dog #${doggyId} was removed. Now we have ${dogs.length} dogs.`);
    } else {
      response.sendStatus(403);
    }
  });

module.exports = router;