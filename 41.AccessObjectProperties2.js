//HERE WE WILL SEE HOW TO ACCESS OBJECT PROPERTIES USING BRACKET NOTATION

/* here we can see that the properties are phrases having spaces between two words so in such cases we need to wrap them up in double quotes*/
var dotNotation = {
  "hat style": "cowboy",
  "shirt size": "hawaii print",
  "shoes type": "sneakers",
};

/* since we had spaces in our properties name, here we give them in square brackets and between quotes (both single and double quotes can work but double is preferrable)*/
var hatValue = dotNotation["hat style"];
var shoeValue = dotNotation["shoes type"];

console.log(hatValue);
console.log(shoeValue);
