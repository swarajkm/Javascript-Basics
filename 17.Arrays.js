//We can store values of different datatypes in a single array
var myArr = ["John", 23, 1.5, "a"];

//nested array
var myarr1 = [
  ["sam", 42],
  ["john", 23],
];

//access array with data indexes
var myarr2 = [50, 60, 70];
var data = myarr2[0]; //we get 50
console.log(data);

//modify array using the indexes
myarr2[2] = 80; // new array will be [50, 60, 80]
