function valid(solution = [], stage) {
  for (let i = 0; i < stage; i++) {
    const s1 = solution[i];
    const s2 = solution[stage];
    const diferentRows = s1 === s2;
    const diferentDiagonals = Math.abs(s1 - s2) === Math.abs(i - stage);
    if (diferentRows || diferentDiagonals) return false;
  }
  return true;
}

function search(solution = [], n, stage) {
  if (stage >= n) return false;

  let exito = false;
  solution[stage] = -1;

  while (solution[stage] < n - 1 && !exito) {
    solution[stage] = solution[stage] + 1;
    if (valid(solution, stage)) {
      if (stage < n - 1) exito = nQueens(solution, n, stage + 1);
      else exito = true;
    }
  }
  return exito;
}

function print(solution, n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let k = 0; k < n; k++) {
      row += solution[k] === i ? " X " : " - ";
    }
    console.log(row);
  }
}

function main() {
  const n = 4;
  const array = Array(n).fill(-1);
  const result = nQueens(array, n, 0);
  if (result) print(array, n);
  else console.log("no solution");
}

main();
