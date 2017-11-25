const pry = require('pryjs');

function mergeSort(sugArray) {
  if(sugArray.length <= 1){
    return sugArray;
  }else {
    var mid = (sugArray.length / 2);
    var left = sugArray.slice(0,mid);
    var right = sugArray.slice(mid, sugArray.length);
  eval(pry.it);
    return merged(mergeSort(left), mergeSort(right));
  }
}

function merged(left, right) {
  var stackSorted = [];
  if(left.length) {
     Array.prototype.push.apply(stackSorted, left);
  }else if(right.length){
     Array.prototype.push.apply(stackSorted, right);
  }else if(left[0] < right[0]){
    stackSorted.push(left.shift());
  }else{
    stackSorted.push(right.shift());
  }
  return stackSorted
}

module.exports = mergeSort
