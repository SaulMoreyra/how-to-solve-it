/* function reverse(word = "", acum = "", position = 0) {
  if (word.length === position) return acum;
  const lastLetther = word[word.length - 1 - position];
  return reverse(word, acum + lastLetther, position + 1);
} */

// MY SECOND SOLUTION WITHOUT ACUM
function reverse(str = "") {
  if (!str.length) return "";
  return reverse(str.slice(1)) + str.charAt(str);
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
    const reverseWord = reverse(element);
    console.log(`${element} = ${reverseWord}`);
  });
}

main();
