// Soal mengecek apakah angka positif semua di array

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every(el => el > 0)
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));