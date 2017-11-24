const pry = require('pryjs');

function mergeSort(sugArray) {
  if(sugArray.length <= 1){
    return sugArray
  }else {
    var mid = (sugArray.length / 2);
    var left = mergeSort(sugArray.slice(0,mid));
    var right = mergeSort(sugArray.slice(mid, sugArray.length + 1));
    eval(pry.it);
    return merge(left, right);
  }
}

function merge(left, right) {
  eval(pry.it);
  if(left.length < 1) {
    return right
  }else if(right.length < 1){
    return left
  }else if(left[0] < right[0]){
    return ([left[0]] + merge(left[1..left.length], right))
  }else{
    return ([right[0]] + merge(left, right[1..right.length]))
  }
}

module.exports = mergeSort
