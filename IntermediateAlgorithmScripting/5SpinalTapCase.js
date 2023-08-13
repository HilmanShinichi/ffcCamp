// Soal
//  spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// spinalCase("AllThe-small Things") should return the string all-the-small-things
// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

function spinalCase(str) {
  // Mengganti huruf besar dengan spasi di depannya
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Mengganti spasi dan underscore dengan tanda hubung
  str = str.replace(/\s+|_+/g, "-");

  // Mengubah semua huruf menjadi huruf kecil
  return str.toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap")); // Output: this-is-spinal-tap
