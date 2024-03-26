/* Problem
Given an array like ["h","e","l", "l", "o"]
Should be inverted with out use another array 
Memory use should be (O)n
*/

// Two pointers technique

const inverter = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const tem = array[start];
    array[start] = array[end];
    array[end] = tem;

    start++;
    end--;
  }
  return array;
};

console.log(inverter(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
