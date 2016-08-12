'use strict';

const server = require('../server')
const supertest = require('supertest');
const should = require('should');
let dogData = {
    name: 'testDog'
  },
  updateDog = {
    index: 0,
    name: 'testDog2'
  };

describe('Dog Service', function() {
  let url = 'http://localhost:8080';
  let request = supertest(url);

  after(function () {
    server.close();
  });

  describe('/dog', function () {
    it('should create a dog', function(done){
      request.post('/dog')
        .send(dogData)
        .expect(201, done);
    });

      it('should update the test dog', function(done){
        request.put('/dog')
          .send(updateDog)
          .expect(200, done);
      });
  });

  describe('/dog/:doggyId', function () {

    it('should delete the first dog', function(done){
      request.delete('/dog/0')
        .expect(200)
        .end(function(error, response){
          if(error) return done(error);

          let dog = response.body;
          dog.should.not.be.empty;

          done();
        });
    });
  });

  describe('/wiggle/:doggyId', function () {

    it('should wiggle the first dog\'s tail', function(done){
      request.get('/wiggle/0')
        .expect(200)
        .end(function(error, response){
          if(error) return done(error);

          let dogWiggle = response.body;

          dogWiggle.should.not.be.empty;
          dogWiggle.msg.should.not.be.empty;
          dogWiggle.msg.should.be.an.instanceOf(String);
          done()
        });
    });
  });

  describe('/goodDog', function () {

    it('should say that the first dog is a good dog', function(done){
      request.get('/goodDog/0')
        .expect(200)
        .end(function(error, response){
          if(error) return done(error);

          let goodDog = response.body;
          goodDog.should.not.be.empty;
          goodDog.msg.should.not.be.empty;
          goodDog.msg.should.be.an.instanceOf(String);
          done();
        });
    });
  });
});
