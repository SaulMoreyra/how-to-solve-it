/**/

// ES5
/* function bubble(array = []) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        const tem = array[i];
        array[i] = array[j];
        array[j] = tem;
      }
    }
  }
  return array;
} */

// TEACHER SOLUTION OPTIMIZED USING SWAPS
function bubble(array = []) {
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

// ES2015
/* function bubble(array = []) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
} */

(function main() {
  const tests = [
    [9, 44, 2, 5, 213, 34, 21, 21, 1, 5, 3],
    [-9, -44, 2, 5, -213, 34, 21, -21, 1, 5, 3],
  ];
  for (const test of tests) console.log(bubble(test));
})();
