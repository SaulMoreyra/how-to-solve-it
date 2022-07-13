/*
Write a recursive function called flatten which accepts 
an array of arrays and returns a new array with all values flattened
*/

// TEACHER SOLUTION
/* function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
 */

function flatten(array = []) {
  if (!array.length) return [];
  if (!Array.isArray(array[0])) return [array[0], ...flatten(array.splice(1))];
  return [...flatten(array[0]), ...flatten(array.splice(1))];
}

(function main() {
  const tests = [
    [1, 2, 3, [4, 5]],
    [1, [2, [3, 4], [[5]]]],
    [[1], [2], [3]],
    [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]],
    [[[[2]]], [[[2]]]],
  ];
  for (const test of tests) console.log(flatten(test));
})();
