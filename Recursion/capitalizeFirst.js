/*
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter 
of each string in the array.
*/
function capitalizeFirst(array = []) {
  if (array.length === 0) return [];
  const word =
    String.fromCharCode(array[0].charCodeAt(0) - 32) + array[0].substring(1);
  return [word, ...capitalizeFirst(array.splice(1))];
}

(function main() {
  const tests = [
    ["car", "taco", "banana"],
    ["perro", "papa", "lolito"],
  ];
  for (const test of tests) console.log(capitalizeFirst(test));
})();
