/**/

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

(function main() {
  const tests = [4, 6, 8, 9];
  for (const test of tests) console.log(sumRange(test));
})();
