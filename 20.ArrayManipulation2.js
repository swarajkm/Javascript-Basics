//assume this is the given array
var myArr = ["sam", "john", "mike"];
console.log(myArr);

//USING SHIFT FUNCTION

/*This function removes element from start of array unlike pop which removes from end of array*/
var d = myArr.shift();
console.log(d);

//USING UNSHIFT FUNCTION

/* This function inserts element but to to start of array, unlike push which added to end of array */
myArr.unshift("pearl");
console.log(myArr);
