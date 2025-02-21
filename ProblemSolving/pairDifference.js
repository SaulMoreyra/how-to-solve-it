/* 
Find pairs with difference K (2)
[1,2,3,4,5] => 
    (1,3) => 1 + K = 3
    (2,4) => 2 + K = 4
    (3,5) => 3 + K = 5 

    Result 3 pairs
*/

function pairDifference(array = [], k){
    const n = array.length
    if(n < 2) return 0

    let pairs = 0
    const numSet = new Set(array)

    for (let i = 0; i < array.length; i++) numSet.has(array[i] + k) && pairs++
    return pairs
}

console.log(pairDifference([1,2,3,4,5], 2))