// Soal destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

function destroyer(arr, ...destroyer) {
  let b = [...destroyer];
  let filter1 = arr.filter((el) => !b.includes(el));
  let filter2 = b.filter((el) => !arr.includes(el));
  return [...filter1, ...filter2];
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
