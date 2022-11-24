function migratoryBirds(arr) {
    const repeted = {};
    arr.forEach(id => repeted[id] = repeted[id] ? repeted[id] += 1 : 1);
    const values = Object.values(repeted);
    const entries = Object.entries(repeted);
    const max = Math.max(...values);
    const match = entries.filter(([_, value]) => value === max).map(([key]) => key);
    const sorted = match.sort()
    return sorted[0]
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))