process.env.NODE_ENV = 'test';

const express = require('express');
const app = require('../app.js');
const request = require('supertest');
const expect = require('chai').expect;

//require the buil-in 'assertion' library
const assert = require('assert'); //for TDD
const renderSampleTiff = require('../server/js/sample.js');
// before(): Runs before all tests in the given block
// beforeEach(): Runs before each test in the given block
// after(): Runs after all tests in the given block
// afterEach(): Runs after each test in the given block

describe('Get the sample geoTIFF image', function() {

  it('renderSampleTiff should be a function with no arguments', function() {

    expect(renderSampleTiff).to.be.a('function');
    expect(renderSampleTiff.length).to.equal(0);
  });

  it('shoud be do something for testing, otherwise this will be pending');

  it("routes '/render-sample' should have a method called GET", function() {

    request(app)
        .get('/render-sample')
        .then( function(response) {
          const geotiff = response.body.geotiff;
          expect(geotiff).to.exist;
          expect(geotiff.width).to.exist;
          expect(geotiff.height).to.exist;
          expect(geotiff.width).to.equal(25);
          expect(geotiff.height).to.equal(59);
          expect(200);
        });
  });
});
