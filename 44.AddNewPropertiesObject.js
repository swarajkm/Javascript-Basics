//HERE WE WILL SEE HOW TO ADD PROPERTIES TO OBJECT USING BOTH DOT AND BRACKET NOTATION

var summerCostume = {
  hat: "cowboy",
  shirt: "hawaii print",
  shoes: "flip flops",
};

/* using dot notation we can simply add single worded properties */
summerCostume.eyewear = "sunglasses";

/* however if we want to add properties with more than one word containing spaces we have to use the bracket notation */
summerCostume["trip location"] = "goa";

console.log(summerCostume);
