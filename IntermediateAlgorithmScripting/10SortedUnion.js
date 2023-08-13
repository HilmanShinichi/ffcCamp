//Soal
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// Passed:uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// Passed:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// Passed:uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// Passed:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

function uniteUnique(...arr) {
  return Array.from(new Set(arr.flat()));
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
