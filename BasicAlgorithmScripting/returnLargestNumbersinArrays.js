function largestOfFour(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    newArray.push(max);
  }
  return newArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
