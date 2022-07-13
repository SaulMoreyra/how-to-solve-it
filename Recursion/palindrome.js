/* function palindrome(word, position = 0) {
  const middle = parseInt(word.length / 2);
  if (word[position] !== word[word.length - 1 - position]) return false;
  if (position === middle) return true;
  return palindrome(word, position + 1);
} */

// TEACHER SOLUTION
/* function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
} */

// MY SECOND SOLUTIN WITH OUT POSITION
function palindrome(word) {
  if (word.length <= 1) return true;
  if (word[0] !== word[word.length - 1]) return false;
  return palindrome(word.slice(1, -1));
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
