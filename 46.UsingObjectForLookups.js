function replacingSwitchCaseWithObject(val) {
  var result = "";

  /* switch (val) {
    case "alpha":
      result = "Adams";
      break;
    case "beta":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
  }
  return result; */

  //However this switch case can be replaced by an object as follows:

  var lookupValues = {
    alpha: "Area 51",
    beta: "Boston",
    charlie: "Chicago",
    delta: "Denver",
  };

  result = lookupValues[val];

  return result;
}

console.log(replacingSwitchCaseWithObject("alpha"));
console.log(replacingSwitchCaseWithObject("delta"));
