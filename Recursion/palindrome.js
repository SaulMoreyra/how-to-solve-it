function palindrome(word, position = 0) {
  const middle = parseInt(word.length / 2);
  if (word[position] !== word[word.length - 1 - position]) return false;
  if (position === middle) return true;
  return palindrome(word, position + 1);
}

function main() {
  const words = [
    "anitalavalatina",
    "hola",
    "aguga",
    "como",
    "ioioi",
    "testhotset",
  ];
  words.forEach((element) => {
    const isPalindrome = palindrome(element);
    console.log(`${element}: ${isPalindrome ? "YES" : "NO"}`);
  });
}

main();
