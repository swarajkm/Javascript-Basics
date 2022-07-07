/* List of common escape sequences in js

    \'      single quote
    \"      double quote
    \\      backslash escape
    \n      newline
    \r      carriage return
    \t      tab
    \b      backspace
    \f      form feed

*/

var myStr = "Firstline\n\t\\SecondLine\nThirdline\rFourthLine";
console.log(myStr);
/*In the output Thirdline will come as output first but since we reset the carriage for that the carriage will come to start of thridline and overwrite it with fourthLine
 */
