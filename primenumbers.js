var question = 61;


function getPrimes(question) {
  var result = [];
  for (var i = 0; i < question; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}
//this part can be improved
function isPrime(question) {

  if (question == 1) {
    return false;
  } else if (question == 2) {
    return true;
  } else if (question == 3) {
    return true;
  } else if (question > 3) {
    for (var i = 2; i < Math.ceil(question / 2) + 1; i++) {
      if (question % i == 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }

}

console.log('Prime numbers upto ' + question + ' == ' + getPrimes(question));