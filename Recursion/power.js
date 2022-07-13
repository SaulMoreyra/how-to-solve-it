/*
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow() 
do not worry about negative bases and exponents.
*/

function power(num, pow) {
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
}

(function main() {
  const tests = [
    [2, 0],
    [2, 2],
    [2, 4],
    [2, 6],
    [2, 8],
  ];
  for (const test of tests) console.log(power(test[0], test[1]));
})();
