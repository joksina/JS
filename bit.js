 function bin2dec(num){
    return num.split('').reverse().reduce(function(x, y, i){
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }

  //
  parseInt('1101000', 2)

  Number(3).toString(2)

  var binaryConverter = function(str){
  str = str.split('').reverse();
  var num = 0;
  for(var i = 0; i < str.length; i++){
    num += str[i]*(Math.pow(2, i));
  }
  return num.toString();
};
binaryConverter("101101");

var number = 156;
var converted = [];

while(number>=1) {
    converted.unshift(number%2);
    number = Math.floor(number/2);
}

function DecimalToBinary(DecimalValue){
    var BinaryValue = '';
    // Loop from 2^64/2 to 1
    for (var i=64; i>=1; i--){
      // Is 2^i/2 within DecimalValue?
      if(DecimalValue >= Math.pow(2,i)/2){
        // If so, add a 1 to BinaryValue and subtract 2^i/2 from DecimalValue
        BinaryValue = BinaryValue+'1';
        DecimalValue = DecimalValue - (Math.pow(2,i)/2);
      }
      else if(BinaryValue.indexOf("1") != -1){
        // If not, add a 0, but only if there is already a 1 in the value
        BinaryValue = BinaryValue+'0';
      }
    }
    return BinaryValue;
  }
  function BinaryToDecimal(BinaryValue){
    var DecimalValue = 0;
    // Flip the character array (aka string) in order to make itterating over it easier
    BinaryValue = BinaryValue.split("").reverse().join("");
    // Loop over BinaryValue (from left to right)
    for (var i=BinaryValue.length-1;i>=0;i--){
      // Is there a 1 in the place?
      if(BinaryValue[i] == '1'){
        // If so, add 2^i/2 to DecimalValue
        DecimalValue = DecimalValue + (Math.pow(2,i+1)/2);
      }
    }
    return DecimalValue;
  }