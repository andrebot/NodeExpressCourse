'use strict';

const express = require('express');
const router = express.Router();
let dogs = require('./dogs');

router.route('/:doggyId')
  .get(function (request, response) {
    var doggyIndex = request.params.doggyId;
    if (doggyIndex && doggyIndex >= 0  && doggyIndex < dogs.length) {
      response.send(dogs[doggyIndex].whoIsAGoodBoy());
    } else {
      response.sendStatus(404);
    }
  });

module.exports = router;
