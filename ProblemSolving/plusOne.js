/*
  You are given a large integer represented as an integer array 
  digits, where each digits[i] is the i(th) digit of the integer.
  The digits are ordered form most significant to least significant
  in left-to-right order. The Large integer doest not contain any 
  any leading 0's

  Increment the large integer by one and return the resulting array
  of digits
*/

const plusOne = (digits = []) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([4, 3, 2, 4])); // [4,3,2,5]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([9, 9, 9, 9])); // [1,0,0,0,0]
