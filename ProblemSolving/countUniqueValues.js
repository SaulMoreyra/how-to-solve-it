/* 
FRECUENTCY PATTERN
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers
in the array, but it will always be sorted
*/

/*  
FIRST SOLUTION USING COUNT FRECUENTCY PATTERN O(n)
loop O(n)
Object.keys O(n)
O(2n) === O(n)
*/
/* function countUniqueValues(array = []) {
  if (!array.length) return 0;
  const counts = {};
  for (const number of array) {
    counts[number] ? (counts[number] += 1) : (counts[number] = 0);
  }
  return Object.keys(counts).length;
} */

/* 
POINTER PATTERN
Only one loop O(n)
*/
function countUniqueValues(array = []) {
  if (!array.length) return 0;
  let i = 0;
  let j = 1;
  while (j < array.length) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
    j++;
  }
  return i + 1;
}

(function main() {
  const tests = [
    [1, 1, 1, 1, 1, 1, 2],
    [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13],
    [],
    [-2, -1, -1, 0, 1],
  ];
  for (const test of tests) console.log(countUniqueValues(test));
})();
