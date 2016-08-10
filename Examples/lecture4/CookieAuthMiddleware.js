'use strict';

const jwt = require('jsonwebtoken');
const cookieName = 'dogServiceCookie';
const secret = 'HanSoloShootsFirst';
const issuer = 'Peter Griffin';
const twoMinutes = '2';

const Auth = function () {
  const verifyAuth = function (request) {
    let cookie = request.cookies[cookieName];
    if (cookie) {
      try {
        request.token = jwt.verify(cookie, secret, { issuer: issuer, ignoreExpiration: false });
        return true;
      } catch (error) {
        console.log('Request unauthorized. Error decoding token.');
        return false;
      }
    } else {
      console.log('Request unauthorized. No token available.');
      return false;
    }
  };

  this.isAuthenticated = function (request, response, next) {

    if (verifyAuth(request)) {
      next();
    } else {
      response.sendStatus(407);
    }
  };

  this.signToken = function (payload) {
    return jwt.sign(payload, secret, { issuer: issuer, expiresInMinutes: twoMinutes });
  };
};

module.exports = new Auth();
