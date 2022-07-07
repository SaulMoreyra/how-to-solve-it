/*
FRECUENCY PATTERN
Write a funtion called sameFrecuency. Given two positive integers,
find out the two numbers hacvce the same frecuency of digits.
Your solution MUST have the following complexities: O(N)

*/

//FRECUENCY TEACHER SOLUTION
/* function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
} */

function sameFrequency(num1, num2) {
  const stNum1 = `${num1}`;
  const stNum2 = `${num2}`;

  if (stNum1.length !== stNum2.length) return false;

  const frecuency = {};
  for (const char of stNum1)
    frecuency[char] ? (frecuency[char] += 1) : (frecuency[char] = 1);

  for (const char of stNum2) {
    if (!frecuency[char]) return false;
    frecuency[char] -= 1;
  }

  return true;
}

(function main() {
  const tests = [
    [182, 281], // true
    [34, 14], // false
    [3589578, 5879385], // true,
    [22, 222], // false
  ];
  for (const test of tests) console.log(sameFrecuency(test[0], test[1]));
})();
