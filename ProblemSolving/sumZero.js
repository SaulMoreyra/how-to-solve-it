/* 
POINTER PATTERN
Write a fucntion called sumZero which accepts a sorted** array of intergers.
The function should find the first pair where the sum is 0.
Return an array that includes both values thah sum to zero or undefined if a pair
doesn't exists
*/

/* 
FIRST SOLUTION loop inside a loop O(n^2)
*/
/* function sumZero(array = []) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) return [array[i], array[j]];
    }
  }
} */

function sumZero(array = []) {
  let left = 0;
  let right = array.length - 1;
  while (left !== right) {
    const sum = array[left] + array[right];
    if (sum === 0) return [array[left], array[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

/* 
SECOND SOLUTION one loop O(n)
*/
(function main() {
  const tests = [
    [-4, -3, -2, -1, 0, 1, 2, 5],
    [-3, -2, -1, 0, 1, 2, 3],
    [-4, -2, 0, 1, 3],
    [1, 2, 3],
  ];

  for (const test of tests) {
    console.log(sumZero(test));
  }
})();
