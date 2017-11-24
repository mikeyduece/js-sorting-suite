const pry = require('pryjs');

function mergeSort(sugArray) {
  if(sugArray.length <= 1){
    return sugArray;
  }else {
    var mid = (sugArray.length / 2);
    var left = mergeSort(sugArray.slice(0,mid));
    var right = mergeSort(sugArray.slice(mid, sugArray.length + 1));
    return merge(left, right);
  }
}

function merge(left, right) {
  if(left.length < 1) {
     right;
  }else if(right.length < 1){
     left;
  }else if(left[0] < right[0]){
     [left[0]].push(merge(left.slice(1,left.length), right));
  }else{
     [right[0]].push(merge(left, right.slice(1,right.length)));
  }
}

module.exports = mergeSort
