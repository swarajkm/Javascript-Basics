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
}

console.log(LogicalOperators(120));
