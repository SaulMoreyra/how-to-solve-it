function divisibleSumPairs(n, k, ar) {
    let count = 0;
    let isDivisible = false;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            isDivisible = (ar[i] + ar[j]) % k === 0;
            if (isDivisible) count += 1;
        }

    }
    return count;
}


console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))