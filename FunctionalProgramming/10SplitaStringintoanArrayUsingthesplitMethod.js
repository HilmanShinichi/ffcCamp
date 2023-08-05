//splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
function splitify(str) {
    // Only change code below this line
  
  return str.split(/[ .,-]/)
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));
