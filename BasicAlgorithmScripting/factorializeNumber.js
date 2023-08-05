function factorialize(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

console.log(factorialize(5));

// // cara function rekursif
// const factorialize = (num) => (num <= 1)? 1 : num * factorialize(num - 1)
// console.log(factorialize(5))
