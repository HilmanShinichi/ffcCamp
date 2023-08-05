//digunakan untuk (index awal, index akhir) => sebelumnya cth 3 berhenti di 2

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  
  return anim.slice(beginSlice, endSlice)
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));