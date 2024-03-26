/* Given an string find the first non repeated else return null
    Example abcabdabf
    Output 'c'
*/

// Hash map technique
const firstNonRepeated = (str) => {
  const hash = {};
  for (const char of str) hash[char] = (hash[char] || 0) + 1;
  for (const char of str) if (hash[char] === 1) return char;
  return null;
};

const firstNonRepeatedIndex = (str) => {
  const hash = {};
  for (const char of str) hash[char] = (hash[char] || 0) + 1;
  for (let i = 0; i < str.length; i++) if (hash[str[i]] === 1) return i;
  return null;
};

console.log(firstNonRepeated("abcabdabf")); //Output c
console.log(firstNonRepeatedIndex("abcabdabf")); //Output 2
