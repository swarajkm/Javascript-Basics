/* we use push to push an item to the rear while we use shift to pop and item from front */
function QueueImp(arr, item) {
  arr.push(item);

  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(QueueImp(testArr, 6));

console.log("After: " + JSON.stringify(testArr));
