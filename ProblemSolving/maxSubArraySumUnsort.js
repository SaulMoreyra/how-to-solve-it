/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum
, which finds the maximum sum of a subarray with the length of the number 
passed to the function. 

Note that a subarray must consist of consecutive elements from the original array.
 In the first example below, [100, 200, 300] is a subarray of the original array, 
 but [100, 300] is not.
*/

function maxSubarraySum(array = [], num) {
  if (num > array.length) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) tempSum += array[i];
  maxSum = tempSum;
  for (let j = num; j < array.length; j++) {
    tempSum = tempSum - array[j - num] + array[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

(function main() {
  const tests = [
    [[100, 200, 300, 400], 2], //700
    [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4], //39
    [[-3, 4, 0, -2, 6, -1], 2], //5
    [[3, -2, 7, -4, 1, -1, 4, -2, 1], 2], //5
    [[2, 3], 3], // null
  ];
  for (const test of tests) console.log(maxSubarraySum(test[0], test[1]));
})();
