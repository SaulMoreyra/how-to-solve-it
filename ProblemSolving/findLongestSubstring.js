/*
Sliding Window
Write a function called findLongestSubstring, which accepts a string and returns 
the length of the longest substring with all distinct characters
*/

// TEACHER SOLUTION (I can't understent it :c)
/* function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
} */

// MY SOLUTION POINTERS
function findLongestSubstring(s = "") {
  if (!s) return 0;
  let start = 0;
  let end = 0;
  let long = 0;
  let counter = {};

  while (start < s.length) {
    if (end < s.length && !counter[s[end]]) {
      counter[s[end]] = 1;
      end++;
    } else {
      long = Math.max(long, end - start);
      counter[s[start]] -= 1;
      start++;
    }
  }
  return long;
}

(function main() {
  const tests = [
    "",
    "rithmschool",
    "thisisawesome",
    "thecatinthehat",
    "bbbbbb",
    "longestsubstring",
    "thisishowwedoit",
  ];
  for (const test of tests) console.log(findLongestSubstring(test));
})();
