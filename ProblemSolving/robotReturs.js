// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

function judge(moves) {
  let y = 0,
    x = 0;
  for (const letter of moves) {
    if (letter === "R") x++;
    if (letter === "L") x--;
    if (letter === "U") y++;
    if (letter === "D") y--;
  }
  return y === 0 && x === 0;
}

console.log(judge("UD"));
