const pry = require('pryjs');
const assert = require('chai').assert;
const expect = require('chai').expect;
const mergeSort = require('../mergeSort');

describe('Sorting Suite', function() {
  context('merge sort', function(){
    it('can do merge sort', function() {
      var unsorted = [3,6,4,2,5,1]
      var sorted = [1,2,3,4,5,6]

      assert.deepEqual(mergeSort(unsorted), sorted)
    });
  })
})
