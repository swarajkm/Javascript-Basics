//using the != operator (inequality operator)
function testInequal(val) {
  if (val != 12) {
    return "Not Equal";
  } else {
    return "Equal";
  }
}

function strictInequality(val) {
  if (val !== 12) {
    return "Not Equal";
  } else {
    return "Equal";
  }
}

console.log(testInequal(10));
console.log(testInequal(12));
/*Inequality operator also does automatic conversion to common type here, so when we give string 12 then it shows equal*/
console.log(testInequal("12"));

/* STRICT INEQUALITY OPERATOR */
console.log("SHOWING FOR STRICT INEQUALITY OPERATOR");
console.log(strictInequality(10));
console.log(strictInequality(12));
/* In strict inequality operator this will be not equal to integer 12 because this wont do automatic conversion */
console.log(strictInequality("12"));
