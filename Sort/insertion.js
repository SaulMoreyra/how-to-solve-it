// TEACHER SOLUTION

/* function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
} */


function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]]
            }
        }
    }
    return array
};

(function main() {
    const tests = [
        // [9, 44, 2, 5, 213, 34, 21, 21, 1, 5, 3],
        [-9, -44, 2, 5, -213, 34, 21, -21, 1, 5, 3],
        // [-9, -44, 1, -90],
    ];
    for (const test of tests) console.log(insertion(test));
})();
