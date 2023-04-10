function twoStrings(s1, s2) {
    const v1 = {};
    const v2 = {};
    const size = Math.max(s1.length, s2.length);
    const alphabet = 26;
    for (let i = 0; i < size; i++) {
        if (i < s1.length && i <= alphabet) v1[s1[i]] = true
        if (i < s2.length && i <= alphabet) v2[s2[i]] = true
    }
    const keys2 = Object.keys(v2);

    for (let i = 0; i < keys2.length; i++) {
        if (v1[keys2[i]]) return "YES";
    }

    return "NO"

}