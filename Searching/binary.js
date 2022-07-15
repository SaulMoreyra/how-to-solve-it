/*

*/

function binarySearch(array = [], element) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.ceil((left + right) / 2);

  while (left !== right && middle <= right) {
    if (array[middle] < element) left = middle;
    else if (array[middle] > element) right = middle;
    else if (array[middle] === element) return middle;
    middle = Math.ceil((left + right) / 2);
  }

  return -1;
}

(function main() {
  const tests = [
    [[1, 2, 3, 4, 5], 2],
    [[1, 2, 3, 4, 5], 3],
    [[1, 2, 3, 4, 5], 5],
    [[1, 2, 3, 4, 5], 6],
    [[1, 2, 3, 4, 5], 7],
  ];
  for (const test of tests) console.log(binarySearch(test[0], test[1]));
})();
