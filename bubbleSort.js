const pry = require('pryjs');
function bubbleSort(sugArray) {
  for(var x = 0; x<sugArray.length; x++) {
    for(var n = 0; n < sugArray.length; n++) {
      first = sugArray[n];
      second = sugArray[n+1];
      if(first > second) {
        sugArray[n] = second
        sugArray[n+1] = first
      }
    }
  }
  return sugArray
}

module.exports = bubbleSort
