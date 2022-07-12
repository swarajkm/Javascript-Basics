var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

//we want to access the pine tree

var getPine = myPlants[1].list[1];
console.log(getPine);
