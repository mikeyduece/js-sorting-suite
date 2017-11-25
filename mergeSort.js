const pry = require('pryjs');

function mergeSort(sugArray) {
  if(sugArray.length <= 1){
    return sugArray;
  }else {
    var mid = (sugArray.length / 2);
    var left = sugArray.slice(0,mid);
    var right = sugArray.slice(mid, sugArray.length + 1);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  var stack = [];
  if(left.length) {
     Array.prototype.push.apply(stack, left);
  }else if(right.length){
     Array.prototype.push.apply(stack, right);
  }else if(left[0] < right[0]){
    stack.push(left.shift());
  }else{
    stack.push(right.shift());
  }
  return stack
}

module.exports = mergeSort
