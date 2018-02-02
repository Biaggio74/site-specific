const express = require('express');
const app = express();
const request = require('supertest');
const expect = require('chai').expect;

//require the buil-in 'assertion' library
const assert = require('assert');

//create a group of tests about Arrays
describe('Array ', () => {
  // Within the Array group creating a group of tests for indexOf
  describe('#indexOf()', () => {
    // a string explanation what we are testing
    it('should return -1 when the value is not present', () => {
      //actual test: -1 should equal indexOf (...)
      assert.equal(-1, [1,2,3].indexOf(4));
    }); //end of a unit

    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    }); //end of a unit

  });
});

describe('Math', () => {
  console.log("Running in :" + process.env.NODE_ENV);
  it('should test if 3*3 = 9', () => {
    assert.equal(9, 3*3);
  });
  it('should test if (3-4)*8 = -8', () => {
    assert.equal(-8, (3-4)*8 );
  })
})


describe('GET /', function(done) {
  it('should get the main page', () => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      //.expect('Content-Length', '15')
      .expect(200, done);
  })
});
