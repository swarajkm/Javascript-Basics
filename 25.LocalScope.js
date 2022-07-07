function LocalScopeExample() {
  var myVar = 5;
  console.log(myVar);
}

LocalScopeExample();
//gives error here as myVar is not defined outside the function scope
console.log(myVar);
