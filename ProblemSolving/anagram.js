function anagram(s) {
    if (s.length % 2 !== 0) return -1;
    const mid = s.length / 2;
    const v1 = {};
    const v2 = {}
    for (let i = 0; i < mid; i++) {
        v1[s[i]] ? v1[s[i]] += 1 : v1[s[i]] = 1;
        v2[s[s.length - i - 1]] ? v2[s[s.length - i - 1]] += 1 : v2[s[s.length - i - 1]] = 1
    }

}

console.log(anagram("aaabbb"))