/*
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object 
which may contain nested objects.
*/

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

/* function nestedEvenSum(obj) {
  if (typeof obj !== "object") {
    if (typeof obj === "number") return obj % 2 === 0 ? obj : 0;
    return 0;
  }

  const [firstkey] = Object.keys(obj);
  if (!firstkey) return 0;
  const first = obj[firstkey];
  delete obj[firstkey];

  return nestedEvenSum(first) + nestedEvenSum(obj);
} */

function nestedEvenSum(obj, sum = 0) {
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
    else if (typeof obj[key] === "object") sum += nestedEvenSum(obj[key]);
  }
  return sum;
}

(function main() {
  const tests = [obj1, obj2];
  for (const test of tests) console.log(nestedEvenSum(test));
})();
