//assume this is the given array
var myArr = ["sam", "john", "mike"];

//then we can push single elements like this
myArr.push("happy");

//or we can push an array of elements to our array
myArr.push(["joy", "mark"]);

//or we can even push individually multiple elements like this
myArr.push("joel", "ellie");

//we can also output to console the entire array by simply passing the array variable
console.log(myArr);

/* the push() functions pushes the given element and returns the updated length of array */

//POP WITH THE ARRAYS - TO REMOVE ELEMENTS

//removes the last element and returns it
var d = myArr.pop();
console.log(d);
