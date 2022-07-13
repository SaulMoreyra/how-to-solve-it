/*
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed 
to the callback. Otherwise it returns false.
*/

// TEACHER SOLUTION
/* function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
} */

function someRecursive(array = [], cbk) {
  if (array.length === 1) return cbk(array[0]);
  if (cbk(array[0])) return true;
  return false || someRecursive(array.splice(1), cbk);
}

const isOdd = (val) => val % 2 !== 0;
const greaterThanTen = (val) => val > 10;

(function main() {
  const tests = [
    [[1, 2, 3, 4], isOdd],
    [[4, 6, 8, 9], isOdd],
    [[4, 6, 8], isOdd],
    [[4, 6, 8], greaterThanTen],
  ];
  for (const test of tests) console.log(someRecursive(test[0], test[1]));
})();
