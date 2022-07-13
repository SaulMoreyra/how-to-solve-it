/*
Write a recursive function called fib which accepts a number 
and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of 
whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
and where every number thereafter is equal to the 
sum of the previous two numbers.*/

// TEACHER SOLUTION
/* function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
} */

function fib(num, pos = 2, prev = 1, curr = 1) {
  if (pos === num - 1) return curr + prev;
  return fib(num, pos + 1, curr, curr + prev);
}

(function main() {
  const tests = [
    [4, 3],
    [10, 55],
    [28, 317811],
    [35, 9227465],
  ];
  for (const test of tests) console.log(fib(test[0]) === test[1]);
})();
