const OPEN_SYMBOLS = ["[", "{", "("];
const CLOSE_SYMBOLS = ["]", "}", ")"];

const isValid = (s) => {
  // SHOULDNT STARTS WITH CLOSED ELEMENTS
  if (s.length === 1 || CLOSE_SYMBOLS.includes(s[0])) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (OPEN_SYMBOLS.includes(s[i])) stack.push(s[i]);
    else {
      const prev = stack.pop();

      // CHECK IF THE OPOSIT SYMBOLS ARE DIREFENT
      if (prev === "(" && s[i] !== ")") return false;
      if (prev === "[" && s[i] !== "]") return false;
      if (prev === "{" && s[i] !== "}") return false;
      if (!prev && s[i]) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("{}")); //true
console.log(isValid("[]")); //true
console.log(isValid("()")); //true
console.log(isValid("{{[()]}}")); //true
console.log(isValid("{()]")); //false
console.log(isValid("{[()}}")); //false
console.log(isValid("{{[()]}))")); //false
