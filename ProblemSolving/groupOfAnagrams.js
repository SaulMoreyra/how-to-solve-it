const groupAnagrams = (strs = []) => {
  const ordered = strs.map((str) => str.split("").sort().join(""));
  const dict = {};
  for (let i = 0; i < ordered.length; i++) {
    if (!dict[ordered[i]]) dict[ordered[i]] = [strs[i]];
    else dict[ordered[i]].push(strs[i]);
  }
  return Object.values(dict);
};

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const input2 = ["listen", "silent", "elbow", "below", "car", "arc"];

console.log(groupAnagrams(input1));
console.log(groupAnagrams(input2));
