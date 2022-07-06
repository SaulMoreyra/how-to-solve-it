/*
SLIDING WINDOW PATTER
Write a function called maxSubarraySum which accepts and array of integers
and a number called n. The function should calculate the maximun sum of
n consecutive elements in the array
*/

/* FIRST SOLUTION O(n^2) */
/* function maxSubarraySum(array = [], num) {
  if (num > array.length) return null;
  let max = -Infinity;
  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) temp += array[i + j];
    if (temp > max) max = temp;
  }
  return max;
} */

function maxSubarraySum(array = [], num) {
  if (num > array.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) maxSum += array[i];
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
}

/* EXPLANATION
  [[1, 2, 5, 2, 8, 1, 5], 2]
  first we sum the first n (ej. 2) numbers [1, 2] = 3 and save the result in maxSum
  second we star a loop in n postion (2) 
  maxSum = 3
  [1, 2, 5, 2, 8, 1, 5]
         i
  we equalize the value maxSum with tempSum
  tempSum = 3
  we subsctract the value of the position i(2) less num (2) === 0 
  [1, 2, 5, 2, 8, 1, 5]
   s
  we add the value of the position i(2) 
  [1, 2, 5, 2, 8, 1, 5]
         a
  then 
  tempSum = tempSum - array[i - num] + array[i];
  tempSum = 3 - 1 + 5 === 7

  we keep the max value in maxSum
  maxSum = max of 3 and 7 === 7
*/

(function main() {
  const tests = [
    [[1, 2, 5, 2, 8, 1, 5], 2], //10
    [[1, 2, 5, 2, 8, 1, 5], 4], //17
    [[4, 2, 1, 6], 1], //6
    [[4, 2, 1, 6, 2], 4], //13
    [[], 4], //null
  ];
  for (const test of tests) console.log(maxSubarraySum(test[0], test[1]));
})();
