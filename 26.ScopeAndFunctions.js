//global variable
var myVar = "T-shirt";

function myOutfit() {
  //local variable with same name as global variable
  var myVar = "Sweater";

  /* When this is returned, always the local variable gets more precedence than the global variable, hence sweater will be output, not t-shirt */
  return myVar;
}

console.log(myOutfit());
console.log(myVar);
