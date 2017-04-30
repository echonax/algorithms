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

function bSort(arr){
  var swaps = 0;
  function swap(array, biggerOnesIndex, smallerOnesIndex){
    var temp = array[smallerOnesIndex];
    array[smallerOnesIndex] = array[biggerOnesIndex];
    array[biggerOnesIndex] = temp;
    swaps++;
  }
  var swapped = true;
  while(swapped){  
  	swapped = false;
  	for(var i = 0; i < arr.length-1; ++i){
      if(arr[i] < arr[i+1]){
      }else{
        swapped = true;
        swap(arr, i+1, i);
      }
    }
  }
  console.log(arr);
  console.log("Swaps:" + swaps);
}

*/
