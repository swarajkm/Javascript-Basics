var myArr = [];
var i = 10;

//this will not run because i is greater than 5
while (i < 5) {
  myArr.push(i);
  i++;
}
console.log(i);
console.log(myArr);

//this will run atleast once because condition is checked at the end
do {
  myArr.push(i);
  i++;
} while (i < 5);

console.log(i);
console.log(myArr);
