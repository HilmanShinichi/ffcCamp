//Soal [1,4] = 10 karena 1+2+3+4 = 10 dan sebaliknya [4, 1]

function sumAll(arr) {
  let total = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    total += i;
  }
  return total;
}

console.log(sumAll([5, 10])); // 45
