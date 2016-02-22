var qArray = [1, 2, 3, 4];
var qArrayy = [6, 7, 8, 9];

var theArray = [9,9,8, 7, 5, 6, 4, 3,-1, 2, 1];

function merge(a, b) {
  var apointer = 0;
  var bpointer = 0;
  var result = [];

  for (var i = 0; i < a.length + b.length; i++) {
    if (a[apointer] <= b[bpointer]) {
      result[i] = a[apointer];
      apointer++;
    } else if (a[apointer] > b[bpointer]) {
      result[i] = b[bpointer];
      bpointer++;
    } else if (apointer == a.length) {
      result[i] = b[bpointer];
      bpointer++;
    } else if (bpointer == b.length) {
      result[i] = a[apointer];
      apointer++;
    }
  }
  return result;
}



function divide(array) {
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0,mid);
  var right = array.slice(mid);

  if (array.length == 1) {
    return array;
  }

  return merge( divide(left) , divide(right) );
}


console.log('Sorting two sorted arrays: ' + qArray + ' - ' + qArrayy);
console.log(merge(qArray,qArrayy));

console.log('Sorting an unsorted array: ' + theArray);
console.log(divide(theArray));
