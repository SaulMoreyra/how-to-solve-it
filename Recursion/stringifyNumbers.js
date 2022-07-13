/**/

/* function stringifyNumbers(obj) {
  if (typeof obj === "number") return `${obj}`;
  const keys = Object.keys(obj);
  if (!keys.length) return obj;
  if (!keys[0]) return {};

  const first = obj[keys[0]];
  delete obj[keys[0]];
  return Object.assign(
    { [keys[0]]: stringifyNumbers(first) },
    stringifyNumbers(obj)
  );
} */

function stringifyNumbers(obj) {
  let temp = {};
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "number") temp[key] = `${obj[key]}`;
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key]))
      temp[key] = stringifyNumbers(obj[key]);
    else temp[key] = obj[key];
  }
  return temp;
}

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
let obj2 = {
  num: 0,
  test: [],
  val: 4,
  info: {
    isRight: true,
    random: 66,
  },
};

(function main() {
  const tests = [obj1 /* obj2 */];
  for (const test of tests) console.log(stringifyNumbers(test));
})();
