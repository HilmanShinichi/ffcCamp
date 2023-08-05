// Soal sort array jadi berurutan dan masukan num kedalam array dan cetak index dari num setelah di masukan
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([4, 5, 7, 3, 11], 6)); // 3
//[3, 4, 5, 6, 7, 11]

//cara ringkas
const getIndexToIns2 = (arr, num) => {
  arr.push(num);
  return arr.sort((a, b) => a - b).indexOf(num);
};
console.log(getIndexToIns2([4, 5, 7, 3, 11], 6));
