//https://jsfiddle.net/echonax/1csz31e3/
//Takes an array and index, starts from index and including the index shifts the next 2 elements to left by 1
//Ex: 1432 -> arr,1 -> 1324

function shiftToLeft(arr, ind){
  if(arr[ind+1] && arr[ind+2]){
    var temp1 = arr[ind+1];
    var temp2 = arr[ind+2];
    arr[ind+2] = arr[ind];
    arr[ind+1] = temp2;
    arr[ind]   = temp1;
    return arr;
  }else{
    console.log("out of bounds");
  }
}
