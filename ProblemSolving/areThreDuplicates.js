/*
SOLVING USING FRECUENCY OR MILTIPLE POINTERS
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

//FRECUENCY TEACHER SOLUTION
/* function areThereDuplicates(...args) {
  let collection = {}
  for(let val in args){
    collection[args[val]] = (collection[v[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
} */

//MULTIPLE POINTERS TEACHER SOLUTION
/* function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
} */

//ONE LINE TEACHER SOLUTION
/* function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
} */

// FRECUENCY MY SOLUTION
function areThereDuplicates(...params) {
  const frecuency = {};
  for (const char of params) {
    if (frecuency[char]) return true;
    frecuency[char] = 1;
  }
  return false;
}

(function main() {
  const tests = [
    [1, 2, 3], // false
    [1, 2, 2], // true
    ["a", "b", "c", "a"], // true
  ];
  for (const test of tests) console.log(areThereDuplicates(...test));
})();
