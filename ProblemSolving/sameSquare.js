/* 
FRECUENTCY PATTERN
Write a function called sameSquare withc accept two arrays
The function should return true if every value in the second arrays 
has it's corresponding valua squared in the second array
The frecuency of values must be the same

Example
[1,2,3] [4,1,9] true
[1,2,3] [1,9] false
[1,2,1] [4,4,1] false (must be the same frecuency)
*/

/* 
FIRST SOLUTION O(n^2)  
for represents O(n)
indexOf represents O(n)
splice represents O(n)
  then indexOf and splice O(2n) = O(n)
  then indexOf and splice inside of a loop means O(n^2)
*/
/* function sameSquare(arr1 = [], arr2 = []) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // pow
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
} */

/* 
SECOND SOLUTION O(n)
every loop means O(n)
then 3 loops means O(3n) === O(n)  
 */
function sameSquare(arr1 = [], arr2 = []) {
  if (arr1.length !== arr2.length) return false;
  const frecuencyCounter1 = {};
  const frecuencyCounter2 = {};

  for (let val of arr1)
    frecuencyCounter1[val] = (frecuencyCounter1[val] || 0) + 1;

  for (let val of arr2)
    frecuencyCounter2[val] = (frecuencyCounter2[val] || 0) + 1;

  for (let key in frecuencyCounter1) {
    if (!(key ** 2 in frecuencyCounter2)) return false;
    if (frecuencyCounter2[key ** 2] !== frecuencyCounter1[key]) return false;
  }
  return true;
}

function main() {
  const test1 = [
    [1, 2, 3],
    [4, 1, 9],
  ];
  const test2 = [
    [1, 2, 3],
    [1, 9],
  ];
  const test3 = [
    [1, 2, 1],
    [4, 4, 1],
  ];

  console.log(sameSquare(test1[0], test1[1]));
  console.log(sameSquare(test2[0], test2[1]));
  console.log(sameSquare(test3[0], test3[1]));
}

main();
