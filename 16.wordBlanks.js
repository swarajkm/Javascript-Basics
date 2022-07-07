/* building a small game where we can pass words and get a cool sentence */
function wordBlanks(noun, adjective, verb, adverb) {
  var result = "";
  result +=
    "The " + adjective + " " + noun + " " + verb + " to the store " + adverb;

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("chicken", "small", "flew", "slowly"));
