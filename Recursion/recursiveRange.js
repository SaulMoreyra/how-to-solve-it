/*
Write a function called recursiveRange which 
accepts a number and adds up all the numbers 
from 0 to the number passed to the function 
*/

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

(function main() {
  const tests = [6, 10];
  for (const test of tests) console.log(recursiveRange(test));
})();
