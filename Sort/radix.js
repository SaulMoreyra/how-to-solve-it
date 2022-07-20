function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

/* function radix(arr) {
  const maxDigit = mostDigits(arr);

  for (let i = 0; i < maxDigit; i++) {
    const queques = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) queques[getDigit(arr[j], i)].push(arr[j]);

    let newArr = [];
    for (let q = 0; q < queques.length; q++) {
      let c;
      while ((c = queques[q].shift())) newArr.push(c);
    }
    arr = newArr;
  }
  return arr;
} */

function radix(arr) {
  const maxDigit = mostDigits(arr);

  for (let i = 0; i < maxDigit; i++) {
    const queques = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) queques[getDigit(arr[j], i)].push(arr[j]);
    arr = [].concat(...queques);
  }
  return arr;
}

console.log(radix([1, 22, 33, 221, 665, 3, 566, 3232]))
