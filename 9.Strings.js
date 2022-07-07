//we can use single quotes and double quotes, but double is preffered
var firstName = "Alan";
var lastName = "Turing";

//escaping literal quotes in strings
/*here if we want to include texts within double quotes within the given string
then javascript can be confused on which quotations to choose to end and start. and for that reason we use the \ symbol before quotation marks to indicate explicitly to consider them as a part of given string also*/

/* Also another way to avoid this confusion is to start the string with single quotes and inside it we can put double quoted texts */

/* Other than single quotes we can also use ` symbol to wrap the string */

//using ` symbol
var myStr = `I am a "double quoted" string inside "double quotes"`;
console.log(myStr);

//single quotes
myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);
