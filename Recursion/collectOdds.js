// HELPER METHOD RECURSION
/* function collectOdds(nums) {
  let result = [];
  function helper(helperInput = []) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(nums);

  return result;
} */

// PURE RECURSION
function collectOdds(nums) {
  let newArr = [];
  if (nums.length === 0) return;
  if (nums[0] % 2 !== 0) newArr.push(nums[0]);
  newArr = newArr.concat(collectOdds(nums.slice(1)));
  return newArr;
}

(function main() {
  const tests = [
    [3, 4, 6, 8],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [11, 22, 33, 44, 55, 66, 77, 88, 99],
  ];
  for (const test of tests) console.log(collectOdds(test));
})();
