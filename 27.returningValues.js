function sum(a, b) {
  return a + b;
}

console.log(sum(5, 6));

var sum1 = 0;
function addThree() {
  sum1 = sum1 + 3;
  //this function doesnt return anything hence if we log it the value will be undefined
}

console.log(addThree());
