//Soal array awal tidak boleh berubah
//output frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]

function frankenSplice(arr1, arr2, n) {
  //buat array baru copy array awal
  let arr3 = [...arr2];
  //index, delete by index, add element
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
