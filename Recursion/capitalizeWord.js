/*
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords(array = []) {
  if (array.length === 0) return [];
  return [array[0].toUpperCase(), ...capitalizeWords(array.splice(1))];
}

(function main() {
  const tests = [
    ["i", "am", "learning", "recursion"],
    ["hello", "from", "recursion"],
  ];
  for (const test of tests) console.log(capitalizeWords(test));
})();
