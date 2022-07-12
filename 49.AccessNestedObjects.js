var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "cup holder": "cups",
      seat: 4,
    },
  },
};

//to access a nested object we can combine and use both dot and bracket notations
var gloveBoxItems = myStorage.car.inside["glove box"];
console.log(gloveBoxItems);
