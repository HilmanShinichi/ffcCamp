// Soal Array1 dan Array 2 sama, maka hasilnya harus true ['hello'] dan ['Hel'] harus true
function mutation(arr) {
  let [arr1, arr2] = arr;
  arr1 = arr1.toLowerCase();
  arr2 = arr2.toLowerCase();

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hel"])); // true
console.log(mutation(["hello", "hey"])); // false
