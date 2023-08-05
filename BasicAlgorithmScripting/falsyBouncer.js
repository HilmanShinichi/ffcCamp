//Soal bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9] yang masuk ke array baru harus yang nilai true

function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));

// Cara Ringkas
const bouncer1 = (arr) => arr.filter(Boolean);
console.log(bouncer1([7, "ate", "", false, 9]));
