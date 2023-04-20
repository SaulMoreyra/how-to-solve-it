// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
    let count = 0
    for (let num = i; num <= j; num++) {
        const reverse = Number(`${num}`.split("").reverse().join(""));
        const result = Math.abs(num - reverse);
        if (result % k === 0) count += 1;
    };
    return count;
}


console.log(beautifulDays(20, 23, 6))