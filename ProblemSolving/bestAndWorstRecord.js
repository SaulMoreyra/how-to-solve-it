function breakingRecords(scores) {
    let up = 0;
    let down = 0;

    let best = scores[0];
    let worst = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (best < scores[i]) {
            best = scores[i];
            up += 1;
        }
        if (worst > scores[i]) {
            worst = scores[i];
            down += 1;
        }
    }
    return [up, down]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
