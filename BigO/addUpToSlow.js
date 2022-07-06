function addUpTo(n) {
 let acum = 0;
  for (let i = 1; i <= n; i++) {
    acum += i;
  }
  return acum;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)