var a = [ 1, 2, 5];
var b = 12;
console.log(coinChangeCombination(a, b));
function coinChangeCombination(arr, value){
	var combinations = new Array(value + 1);
  for(var c = 0; c < combinations.length; ++c) {combinations[c] = 0;}
  combinations[0] = 1;
  
  for(var j = 0; j < arr.length; ++j){
    var coin = arr[j];
  	for(var i = 1; i < combinations.length; ++i){
      if(i >= coin){
        combinations[i] += combinations[i-coin]; //important part
      }
    }
  }
  return combinations[combinations.length-1];
}
