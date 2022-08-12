function gameOfThrones(s) {
  const checked = {};
  for (let i = 0; i < s.length; i++)
    checked[s[i]] ? checked[s[i]]++ : (checked[s[i]] = 1);
  const values = Object.values(checked);
  const odd = values.filter((num) => num % 2 !== 0);

  const canBePalindrom = odd.length === 1 || odd.length === 0;
  return canBePalindrom ? "YES" : "NO";
}
