function fearNotLetter(str) {
  const source = str.split("").map((angka) => angka.charCodeAt(0));
  const compare = [];
  const hurufAwal = str.charCodeAt(0);
  const hurufAkhir = str.charCodeAt(str.length - 1);

  for (let i = hurufAwal; i <= hurufAkhir; i++) {
    compare.push(i);
  }

  const hasil = compare.filter((el) => !source.includes(el))[0];

  return hasil ? String.fromCharCode(hasil) : undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
