'use strict';

const runSequence = require('run-sequence');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-mocha');
const gulp = require('gulp');

gulp.task('nodemon:start', function () {
  nodemon({
    script: ['./server']
  })
  .on('restart', function () {
    console.log('Nodemon restarted!');
  });
});

gulp.task('testServer', () => 
  gulp.src('tests/apiTest.js', {read: false})
      .pipe(mocha({reporter: 'spec'}))
);
