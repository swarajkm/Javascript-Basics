/*any variable which is outside the functions is global and accessible inside all functions*/
var globalvar = 10;

function fun1() {
  /* In such cases where we dont declare a variable using var, let or const; then by default they become global type hence, the nature will be global and thus they also will be accessible inside every other function */
  oopsGlobal = 5;
}

function fun2() {
  var output = "";

  if (typeof globalvar != undefined) {
    output += "my Global: " + globalvar;
  }

  if (typeof oopsGlobal != undefined) {
    output += "oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

fun1();
fun2();
