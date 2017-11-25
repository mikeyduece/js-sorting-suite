const pry = require('pryjs');

function mergeSort(sugArray) {
  if(sugArray.length <= 1){
    return sugArray;
  }else {
    var mid = (sugArray.length / 2);
    var left = sugArray.slice(0,mid);
    var right = sugArray.slice(mid, sugArray.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  var stackSorted = [];
  while (left.length && right.length) {
    if(left[0] <= right[0]){
      stackSorted.push(left.shift());
    }else{
      stackSorted.push(right.shift());
    }
  }
  if (left.length) {
    Array.prototype.push.apply(stackSorted, left);
  }else if (right.length){
    Array.prototype.push.apply(stackSorted, right);
  }
  return stackSorted
}

module.exports = mergeSort
