var summerCostume = {
  hat: "cowboy",
  shirt: "hawaii print",
  shoes: "flip flops",
};
summerCostume.eyewear = "sunglasses";
summerCostume["trip location"] = "goa";
console.log(summerCostume);

//HERE WE WILL SEE HOW TO DELETE PROPERTIES OF AN OBJECT - KEYWORD USED "delete"

//single worded properties can be delete using both dot and bracket
delete summerCostume.hat;

//multi worded with space properties should be deleted using bracket notation
delete summerCostume["trip location"];

console.log(summerCostume);
