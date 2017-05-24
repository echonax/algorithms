//bubblesort with swap count
function bubbleSort(array){
  var swaps = 0;
  function swap(array, biggerOnesIndex, smallerOnesIndex){
    var temp = array[smallerOnesIndex];
    array[smallerOnesIndex] = array[biggerOnesIndex];
    array[biggerOnesIndex] = temp;
    swaps++;
  }
  var sorted = false;
  var lastUnsorted = array.length - 1;
  while(!sorted){
    sorted = true;
    for(var i = 0; i < lastUnsorted; i++){
      var currentElement = array[i];
      var nextElement = array[i+1];
      if(currentElement > nextElement){
      	sorted = false;
        swap(array, i, i+1);
      }
    }
    lastUnsorted--;
  }	
  console.log("Array is sorted in "+swaps+ " swaps.");
  console.log("First Element: " + array[0]);
  console.log("Last Element: " + array[array.length-1]);
}


/*unoptimized
function swap(index1, index2, array){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

var numberOfSwaps = 0;
for (var i = 0; i < n; i++) {

    for (var j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(j, j + 1, a);
            numberOfSwaps++;
        }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
    }
}
console.log("Array is sorted in " + numberOfSwaps + " swaps.");
console.log("First Element: " + a[0]);
console.log("Last Element: " + a[a.length-1]);

*/
