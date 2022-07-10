//using the === operator (three equals sign)
function testEqual(val) {
  if (val === 12) {
    return "Equal";
  } else {
    return "Not equal";
  }
}

console.log(testEqual(10));
console.log(testEqual(12));

/*in strict equality, there is not automatic conversion to a common type. Hence for this case, it will show not equal here*/
console.log(testEqual("12"));
