/*
Find the Index of the first occurrence in a String
Given two strings needle and haystack, return the index
occurrence of needle in haystack, or -1 if needle is not
part of haystack

Time complexity 
O ((n - m+1) x m)
*/

const findIndexSubstring = (haystack, needle) => {
  if (haystack === needle || needle === "") return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let sub = haystack.substring(i, i + needle.length);
      if (sub === needle) return i;
    }
  }

  return -1;
};

console.log(findIndexSubstring("asfbntsad", "sad")); // 6
console.log(findIndexSubstring("letcode", "code")); // 3
