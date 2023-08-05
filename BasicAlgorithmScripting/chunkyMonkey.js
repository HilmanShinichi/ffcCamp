// array di pecah sesuai size
function chunkArrayInGroups(arr, size) {
  const arrGede = [];

  for (let i = 0; i < arr.length; i += size) {
    arrGede.push(arr.slice(i, i + size));
  }

  return arrGede;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
