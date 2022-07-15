/*
Write a function which count times of a substring in a string
*/

function naive(str, sub) {
  let matches = 0;
  let pointer = 0;

  for (let i = 0; i < str.length; i++) {
    if (pointer === sub.length) {
      matches += 1;
      pointer = 0;
    }
    if (str[i] === sub[pointer]) pointer += 1;
    else pointer = 0;
  }
  return matches;
}

(function main() {
  const tests = [
    ["hola como estas como te ha ido", "como"],
    ["hola como estas como te ha ido come como camello coma cama come", "co"],
    ["hello mi name is isaias islas", "is"],
  ];
  for (const test of tests) console.log(naive(test[0], test[1]));
})();
