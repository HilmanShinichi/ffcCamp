function findElement(arr, func) {
  let num = 0;
  num = arr.find(func);
  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// Soal Cari bilangan genap dari element yang pertama muncul

// Cara ringkas
const findElement2 = (arr, func) => arr.find(func);
console.log(findElement2([1, 2, 3, 4], (num) => num % 2 === 0));
