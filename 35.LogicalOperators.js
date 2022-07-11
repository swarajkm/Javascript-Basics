/* here we see all the logical operators in js */
function LogicalOperators(num) {
  if (num > 100) {
    return "Above 100";
  }

  if (num >= 90) {
    return "Number is 90 or greater";
  }

  if (num < 50) {
    return "Number is less than 50";
  }

  if (num <= 10) {
    return "Number is 10 or lesser";
  }

  //using logical and operator
  if (num < 50 && num > 25) {
    return "Number is greater than 25 but less than 50";
  }

  //using logical or operator
  if (num < 10 || val > 20) {
    return "Not in range!";
  }
}

console.log(LogicalOperators(120));
