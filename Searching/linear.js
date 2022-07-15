/*
Write a function called linearSearch which accepts an array and a value,
and returns the index at whith the values exist. If the value does not
exists in the array return -1
*/

function linearSearch(array = [], element) {
  for (let i = 0; i < array.length; i++) if (array[i] === element) return i;
  return -1;
}

(function main() {
  const tests = [
    [[10, 15, 20, 25, 30], 15],
    [[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4],
    [[100], 100],
    [[1, 2, 3, 4, 5], 6],
    [[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10],
    [[100], 200],
  ];
  for (const test of tests) console.log(linearSearch(test[0], test[1]));
})();
