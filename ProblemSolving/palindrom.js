const isPalindrome = (s) => {
  let left = 0;
  let rigth = s.length - 1;

  while (left < rigth) {
    if (s[left] !== s[rigth]) return false;
    rigth--;
    left++;
  }
  return true;
};

console.log(isPalindrome("abba"));
