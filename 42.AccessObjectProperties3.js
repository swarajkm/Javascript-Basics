//HERE WE WILL SEE HOW TO ACCESS OBJECT PROPERTIES USING VARIABLES

var dotNotation = {
  hat: "cowboy",
  shirt: "hawaii print",
  shoes: "sneakers",
};

/* here we stored one of the object properties in a variable and passed that variable as a parameter using the bracket notation */
var hatstyle = "hat";
var finalVal = dotNotation[hatstyle];
console.log(finalVal);
