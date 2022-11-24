const hasPair = (array = []) => {
  let pair = array.splice(0, 2);
  let i = 0;
  while (array.length > 0) {
    if (pair[1] === array[i] && pair[0] === array[i + 1]) {
      array.splice(i - 1, i);
      pair = array.splice(0, 2);
      i = 0;
      console.log(pair, array);
      //     console.log(array);
    }
    i++;
    if (i == 4) break;
  }

  return "YES";
};

hasPair([4, 5, 1, 4, 5, 4, 4, 1]);

// for (let i = 0; i < array.length; i++) {
//   if (pair[1] === array[i] && pair[0] === array[i + 1]) {
//     console.log(array[i], array[i + 1]);
//     // console.log(pair, array);
//     console.log(array.splice(i - 1, i));

//     pair = array.splice(0, 2);
//     // console.log(array);
//     //     console.log(array);
//   }
// }
