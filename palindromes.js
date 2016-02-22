var theStr = 'erababaer';

function containsPali(str) {
  
  var result = [];
  var fPointer = 0;
  var sPointer = 0;

  for (var i = 0; i <= str.length; i++) {
  
    for (var j = i; j <= str.length; j++) {
      var strToCheck = str.substring(i, j);
      
      if (isPali(strToCheck) == "pali") {
        result.push(strToCheck);
      }
      
    }
  }
  return result;
}

function isPali(str) {

  for (var i = 0; i < Math.floor(str.length / 2); i++) {

    if (str[i] != str[str.length - i - 1]) {
      return 'not pali';
    }

  }
  return 'pali';
}


console.log('Is "' + theStr + '" palindrome?' + ' Ans: ' + isPali(theStr));
console.log('Does "' + theStr + '" contains palindrome words? ' + ' Ans: ' + containsPali(theStr));