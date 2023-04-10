function createRange(range = "") {
    const [n1, n2] = range.split("-");
    const num1 = Number(n1);
    const num2 = Number(n2);

    const array = []
    for (let i = num1; i <= num2; i++) array.push(i);
    return array;
}

function makeRanges(data = "") {
    const ranges = data.split(",");
    let acum = [];
    for (let range of ranges) {
        if (range.includes("-")) acum.push(...createRange(range));
        else acum.push(Number(range))
    }
    return acum;
}

console.log(makeRanges("1,2,3-7,8,9,10-14"));