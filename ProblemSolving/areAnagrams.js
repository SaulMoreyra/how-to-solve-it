const areAnagrams = (s, t) => {
  if (s.length !== t.length) return false;

  let freqMap = {};
  for (const letter of s) freqMap[letter] = (freqMap[letter] || 0) + 1;
  for (const letter of t) {
    if (!freqMap[letter] || freqMap[letter] === 0) return false;
    else freqMap[letter]--;
  }
  return true;
};

console.log(areAnagrams("anagram", "nagaram"));
