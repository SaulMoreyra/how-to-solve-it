function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quick(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quick(arr, left, pivotIndex);
    quick(arr, pivotIndex + 1, right);
  }
  return arr;
}

(function main() {
  const tests = [
    [4, 6, 9, 1, 2, 5, 3],
    [9, 44, 2, 5, 213, 34, 21, 21, 1, 5, 3],
    [-9, -44, 2, 5, -213, 34, 21, -21, 1, 5, 3],
  ];
  for (const test of tests) console.log(quick(test));
})();
