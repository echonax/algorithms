convert2Binary(6);//https://jsfiddle.net/echonax/2bu96xph/

function convert2Binary(n){
    var res = [];
    divider(n);
    function divider(n){
        var division = Math.floor(n / 2);
        var remainder = n % 2;
        if(division >= 2){
          if(remainder == 1){
          	res.unshift(1);
          }else{
          	res.unshift(0);
          }        	
          return divider(division);
        }else{
          res.unshift(remainder);
        	return res.unshift(1);
        }
    }    
    console.log(res.join(""));
}
