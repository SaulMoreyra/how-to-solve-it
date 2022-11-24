// 1, 3 ,4
const matriz = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "1"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["1", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "9", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "1", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
]

//3 5 9
// const matriz = [
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
//   ["6", "x", "5", "x", "3", "x", "x", "4", "x"],
//   ["2", "x", "1", "1", "x", "x", "x", "x", "x"],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "x"],
//   ["x", "x", "x", "x", "x", "x", "x", "x", "9"]
// ]

const squares = [
  [0, 0], [0, 3], [0, 6],
  [3, 0], [3, 3], [3, 6],
  [6, 0], [6, 3], [6, 6]
]

const hasSameColumn = (element, column) => {
  const repeated = {};
  for (let i = 0; i < matriz.length; i++) {
    const value = matriz[i][column];

    // console.log(element, value)
    if (value === "x") continue;
    if (repeated[value]) repeated[value] += 1;
    else repeated[value] = 1;
  }

  // console.log(repeated)
  const times = repeated[element] > 1
  return times;
}

const hasSameRow = (element, row) => {
  const repeated = {};
  for (let i = 0; i < matriz[row].length; i++) {
    const value = matriz[row][i];
    if (value === "x") continue;
    if (repeated[value]) repeated[value] += 1;
    else repeated[value] = 1;
  }
  // console.log(repeated)
  const times = repeated[element] > 1
  return times;
}


const hasDuplicatedSquare = (square) => {
  let [c, r] = squares[square];

  const repeated = {}
  for (let i = c; i < c + 3; i++) {
    // const file = []
    for (let j = r; j < r + 3; j++) {
      const value = matriz[i][j];
      // console.log(value)
      if (value === "x") continue;
      if (hasSameColumn(value, j)) return true;
      if (hasSameRow(value, i)) return true;;
      if (repeated[value]) return true;
      repeated[value] = true;
    }
    // console.log(file)
  }
  return false
}


const hasErrorsSudoku = () => {
  const errors = [];
  for (let i = 0; i < 9; i++) {
    const error = hasDuplicatedSquare(i);
    if (error) errors.push(i + 1);
  }
  return errors;
}

console.log(hasErrorsSudoku())