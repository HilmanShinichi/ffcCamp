// ambli angka pstif jadikan bulat dan pangkat 2

const squareList = arr => {
    // Only change code below this line
    return arr
    .filter(angka => angka > 0 && Number.isInteger(angka))
    .map(angka => angka * angka )
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);