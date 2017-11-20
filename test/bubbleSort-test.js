// var defaults = require('object.defaults');
const pry = require('pryjs');
const assert = require('chai').assert;
const expect = require('chai').expect;
const bubbleSort = require('../bubbleSort');

describe('Sorting Suite', function() {
  context('bubble sort', function(){
    it('can do bubble sort', function() {
      var unsorted = [3,6,4,2,5,1]
      var sorted = [1,2,3,4,5,6]

      assert.deepEqual(bubbleSort(unsorted), sorted)
    });
  })
})
