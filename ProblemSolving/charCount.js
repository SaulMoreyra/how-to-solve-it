// Write a funtion which takes in a string and returns counts of each character in the string

/**
 * Break in a small pieces
 * make object to return at end
 * loop over string for each character
 *    if the char is a number/letter AND is a key in the object, add one to count
 *    if the char is a numer/letter AND not in object, add it to object and set value 1
 *    if char is something else (space, period, etc) don't do enything
 * return object
 */
// FIRST SOLUTION
/* function charCount(strInput = "") {
  const str = strInput.toLowerCase();
  const result = {};
  for (let char of str) {
    if (!/[a-z0-9]/.test(char)) continue;
    if (!!result[char]) result[char] += 1;
    else result[char] = 1;
  }
  return result;
} */

// SECOND SOLUTION
/* function charCount(strInput = "") {
  const str = strInput.toLowerCase();
  const result = {};
  for (let char of str) {
    if (!/[a-z0-9]/.test(char)) continue;
    result[char] = ++result[char] || 1;  // ++undefined === NaN  then NaN || 1 === 1
  }
  return result;
} */

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  )
    return false;
  return true;
}

function charCount(str = "") {
  const result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

console.log(charCount("hi there!"));
console.log(charCount("hi hello hola $&there!"));
