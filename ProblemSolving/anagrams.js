/* 
FRECUENTCY PATTERN
Given two strings, write a function to determine if the second
string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranginf the letters
of another, such as cinema, formed from iceman
*/

/*
FIRST SOLUTION
3 loops means O(3n) === O(n)
*/
/* function validAnamgram(s1 = "", s2 = "") {
  if (s1.length !== s2.length) return false;
  const frecuencyCounter1 = {};
  const frecuencyCounter2 = {};

  for (const char of s1)
    frecuencyCounter1[char] = (frecuencyCounter1[char] || 0) + 1;
  for (const char of s2)
    frecuencyCounter2[char] = (frecuencyCounter2[char] || 0) + 1;

  for (const key in frecuencyCounter1)
    if (frecuencyCounter1[key] !== frecuencyCounter2[key]) return false;
  return true;
} */

/*
SECOND SOLUTION
2 loops means O(2n) === O(n) ✅
*/
function validAnamgram(s1 = "", s2 = "") {
  if (s1.length !== s2.length) return false;
  const lookup = {};

  for (const char of s1)
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);

  for (const char of s2) {
    // lookup["c"]: 0  !0 === true // that means there are fewer "c" in the first object
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }
  return true;
}

function main() {
  const tests = [
    ["", ""],
    ["aaz", "zza"],
    ["anagram", "nagaram"],
    ["rat", "car"],
    ["awesome", "awesom"],
    ["qwerty", "qeywrt"],
    ["texttwisttime", "timetwisttext"],
    ["aazz", "aaxx"],
  ];

  for (const test of tests) {
    console.log(validAnamgram(test[0], test[1]));
  }
}

main();
