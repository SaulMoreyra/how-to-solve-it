/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts 
two parameters - an array of positive integers and a positive integer. 
This function should return the minimal length of a contiguous
 subarray of which the sum is greater than or equal to the integer 
 passed to the function. If there isn't one, return 0 instead.
*/

function minSubArrayLen(array = [], num) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let total = 0;

  while (start < array.length) {
    if (total < num && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
    } else break;
  }
  return minLen === Infinity ? 0 : minLen;
}

(function main() {
  const tests = [
    [[2, 3, 1, 2, 4, 3], 7],
    [[2, 1, 6, 5, 4], 6],
    [[3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52],
    [[1, 4, 16, 22, 5, 7, 8, 9, 10], 39],
    [[1, 4, 16, 22, 5, 7, 8, 9, 10], 55],
    [[4, 3, 3, 8, 1, 2, 3], 11],
    [[1, 4, 16, , 22, 5, 7, 8, 9, 10], 95],
  ];
  for (const test of tests) console.log(minSubArrayLen(test[0], test[1]));
})();
