'use strict';

const express = require('express');
const router = express.Router();
const auth = require('./auth');
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({extended: false});
let dogs = require('./dogs');

router.route('/')
  .post(parseUrlencoded, function(request, response){
    let data = request.body;

    if (data && data.doggyId && data.doggyId < dogs.length) {
      let dog = dogs[data.doggyId];
      let payload = {name: dog.getName(), id: data.doggyId};
      const token = auth.signToken(payload);

      // set the cookie on the response
      response.cookie("dogServiceCookie" ,token);
      response.status(200).json(token);
    }else{
      response.sendStatus(403);
    }
  });

module.exports = router;
