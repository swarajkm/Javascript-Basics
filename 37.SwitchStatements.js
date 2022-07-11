/* Each case here is like if-else-if and default is like the last else statement in the if-else-if chains */

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    /*in switch case here, val will be compared with all case numbers by strict equality operator i.e. === (so here 1 and '1' will not be same)*/
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Wrong option!";
  }

  return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));

/* CHAINING SWITCH CASE STATEMENTS */

function chainSwitchCase(val) {
  var answer = "";
  switch (val) {
    /* used in situations where for more than one case we want a single answer. hence we club the cases like this together */
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;
  }

  return answer;
}

console.log(chainSwitchCase(1));
console.log(chainSwitchCase(2));
console.log(chainSwitchCase(5));
console.log(chainSwitchCase(6));
