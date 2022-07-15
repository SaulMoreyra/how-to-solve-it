/**/

function selection(array = []) {
  let minimun;
  for (let i = 0; i < array.length - 1; i++) {
    minimun = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimun]) minimun = j;
    }
    if (minimun !== i) [array[i], array[minimun]] = [array[minimun], array[i]];
  }
  return array;
}

(function main() {
  const tests = [
    [9, 44, 2, 5, 213, 34, 21, 21, 1, 5, 3],
    [-9, -44, 2, 5, -213, 34, 21, -21, 1, 5, 3],
  ];
  for (const test of tests) console.log(selection(test));
})();
