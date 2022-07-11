function ifElseIf(val) {
  if (val > 10) {
    return "Value greater than 10";
  } else if (val > 5 && val <= 10) {
    return "Value greater than 5 but less than equal to 10";
  } else {
    return "value less than equal to 5";
  }
}

console.log(ifElseIf(7));
console.log(ifElseIf(25));
console.log(ifElseIf(2));
