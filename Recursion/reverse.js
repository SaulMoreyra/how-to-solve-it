function reverse(word = "", acum = "", position = 0) {
  if (word.length === position) return acum;
  const lastLetther = word[word.length - 1 - position];
  return reverse(word, acum + lastLetther, position + 1);
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
