function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("abc", 3));

//hasil harus abcabcabc jangan gunakan .repeat()

// cara lebih ringkas
const reapeatStringNumTimes = (str, num) =>
  num <= 0 ? "" : str + reapeatStringNumTimes(str, num - 1);
console.log(repeatStringNumTimes("abc", 3));

// cara lebih ringkas
const reapeatStringNumTimes2 = (str, num) => new Array(num).fill(str).join("");
console.log(reapeatStringNumTimes2("abc", 3));
