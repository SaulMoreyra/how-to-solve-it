/**/

// IMPERATIVE
/* function factorial(num) {
  let total = 1;
  for (let i = 0; i < num; i++) {
    total *= i;
  }
  return total;
} */

// RECURSIVE
/* function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
} */

// RECURSIVE ONE LINE
const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));

(function main() {
  const tests = [3, 4, 6, 8, 0];
  for (const test of tests) console.log(factorial(test));
})();
