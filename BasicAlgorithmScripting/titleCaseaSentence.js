// Soal Buat fungsi agar inputan string berupa huruf kapital di awal kata
function titleCase(str) {
  let newStr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < newStr.length; i++) {
    newArr.push(
      newStr[i][0].toUpperCase() + newStr[i].substring(1).toLowerCase()
    );
  }
  return newArr.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt")); //Short And Stout

// Cara ringkas
const titleCase2 = (str) =>
  str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log(titleCase("sHoRt AnD sToUt")); //Short And Stout
