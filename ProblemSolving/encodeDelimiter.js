const HASH = "__$$__";

function encode(s) {
  const enco = s.join(HASH);
  return enco;
}

function decode(s) {
  const deco = s.split(HASH);
  return deco;
}

let input1 = ["hello", "how", "are", "you"];

let encode1 = encode(input1);
let decode1 = decode(encode1);

console.log(encode1);
console.log(decode1);
