/*
Write a function called productOfArray which takes 
in an array of numbers and returns the product of them all.
*/

function productOfArray(array = []) {
  if (array.length === 0) return 1;
  const [first, ...rest] = array;
  return first * productOfArray(rest);
}

(function main() {
  const tests = [
    [1, 2, 3],
    [1, 2, 3, 10],
  ];
  for (const test of tests) console.log(productOfArray(test));
})();
