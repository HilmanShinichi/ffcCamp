// Soal jika inputan type boolean maka true jika bukan maka false
function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}

console.log(booWho(false));

// Cara ringkas
const booWho1 = (bool) => (typeof bool === "boolean" ? true : false);

console.log(booWho1(false));
