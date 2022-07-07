//this is a sample multidimensional array
var myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var d1 = myArr[0][0]; //gives 1
console.log(d1);
var d2 = myArr[3][0][1]; //gives 10
console.log(d2);
