/* here we have an aray named myMusic which has two objects stored in it. This structure is much similar to JSON which we will know about it later */

var myMusic = [
  {
    title: "faded",
    artist: "alan walker",
    "release year": 2012,
    formats: ["CD", "DVD", "MP3"],
    gold: true,
  },
  {
    title: "drag me down",
    artist: "1D",
    "release year": 2011,
    formats: ["CD", "DVD", "MP3"],
    gold: false,
  },
];

console.log(myMusic[0]); //to access the first object as a whole
console.log(myMusic[0].artist); //to access a property of first object
