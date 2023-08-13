function sumPrimes(num) {
  let myArr = [];
  for (let i = 1; i <= num; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (i > 1 && prime) {
      myArr.push(i);
    }
  }
  return myArr.reduce((acc, curr) => acc + curr);
}

console.log(sumPrimes(10));
