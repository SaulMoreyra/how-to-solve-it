const compareObjs = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;
  for (const prop of keys1) {
    const p1 = JSON.stringify(obj1[prop]);
    const p2 = JSON.stringify(obj2[prop]);
    if (p1 !== p2) return false;
  }
  return true;
};

export function memoize(fn) {
  let memo = new Map();
  return (...m) => {
    let n = m.length > 1 ? m : m[0];
    if (typeof n === "object") {
      let finded = {};
      memo.forEach((_, key) => {
        if (compareObjs(key, n)) n = key;
      });
    }

    if (!memo.has(n)) {
      const result = m.length > 1 ? fn(...n) : fn(n);
      memo.set(n, result);
    }
    return memo.get(n);
  };
}
