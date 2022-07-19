function mergeArrays(array1, array2) {
  const results = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      results.push(array1[p1]);
      p1++;
    } else {
      results.push(array2[p2]);
      p2++;
    }
  }
  while (p1 < array1.length) {
    results.push(array1[p1]);
    p1++;
  }

  while (p2 < array2.length) {
    results.push(array2[p2]);
    p2++;
  }

  return results;
}

function merge(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = merge(array.slice(0, mid));
  const right = merge(array.slice(mid));
  return mergeArrays(left, right);
}

(function main() {
  const tests = [
    [9, 44, 2, 5, 213, 34, 21, 21, 1, 5, 3],
    [-9, -44, 2, 5, -213, 34, 21, -21, 1, 5, 3],
  ];
  for (const test of tests) console.log(merge(test));
})();
