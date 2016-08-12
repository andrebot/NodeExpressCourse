'use strict';

const express = require('express');
const router = express.Router();
let dogs = require('./dogs');

router.route('/:doggyId')
  .get(function (request, response) {
    const doggyIndex = request.params.doggyId;

    if (doggyIndex >= 0 && doggyIndex < dogs.length) {
      response.json({ msg: dogs[doggyIndex].wiggle() });
    } else {
      response.sendStatus(403);
    }
  });

module.exports = router;
