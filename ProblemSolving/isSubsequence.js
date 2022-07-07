/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes 
in two strings and checks whether the characters 
in the first string form a subsequence of the characters 
in the second string. In other words, the function should 
check whether the characters in the first string appear 
somewhere in the second string, without their order changing.
*/

// TEACHER SOLUTION
/* function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
} */

// TEACHER'S SOLUTIN RECURSION (i don't like it) slice O(N)
/* function isSubsequence(str1, str2) {
  console.log(str1, str2);
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
} */

// MY SOLUTION
function isSubsequence(s1 = "", s2 = "") {
  let p1 = 0;
  let p2 = 0;

  while (p2 < s2.length) {
    if (p1 === s1.length) return true;
    if (s1.charAt(p1) === s2.charAt(p2)) p1++;
    else p2++;
  }
  return false;
}

(function main() {
  const tests = [
    ["hello", "hello world"],
    ["sing", "sting"],
    ["abc", "abracadabra"],
    ["abc", "acb"],
  ];
  for (const test of tests) console.log(isSubsequence(test[0], test[1]));
})();
