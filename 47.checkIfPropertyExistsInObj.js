/* here we will see how can we check if a certain property exists in an javascript object. 
-> For this we will use inbuilt method "hasOwnProperty" */

var myObj = {
  myName: "Swaraj",
  myAge: 23,
  myGender: "Male",
};

function checkPropertyExists(prop) {
  if (myObj.hasOwnProperty(prop)) {
    /*here it is safe to use bracket notation because it can handle both single word and words having space based properties*/
    return myObj[prop];
  } else {
    return "Property Not Found";
  }
}

console.log(checkPropertyExists("myName"));
console.log(checkPropertyExists("myHome"));
