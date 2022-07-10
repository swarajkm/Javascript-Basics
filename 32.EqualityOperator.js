//using the == operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  } else {
    return "Not equal";
  }
}

console.log(testEqual(10));
console.log(testEqual(12));

/*here even if we pass string type 12, it will show equal because == operator tries to convert the two comparing values to a common datatype first*/
console.log(testEqual("12"));
