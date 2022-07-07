/*
DIVIDE AND CONQUER PATTERN
Given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to
the function is located. If the value is not found, return -1
*/
/* 
FIRST SOLUTION O(n)
*/
/* function search(array = [], value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
} */

/* 
SECOND SOLUTION O(logN)
*/
function search(array = [], value) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (array[middle] < value) min = middle + 1;
    else if (array[middle] > value) max = middle - 1;
    else return middle;
  }
  return -1;
}

(function main() {
  const tests = [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], 5],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 9],
    [[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 7],
    [[2, 5, 8, 11, 14, 17, 20, 23, 26, 29], 3],
  ];
  for (const test of tests) console.log(search(test[0], test[1]));
})();
