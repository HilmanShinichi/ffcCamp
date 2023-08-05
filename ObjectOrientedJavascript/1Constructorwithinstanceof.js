// Soal jika memiliki constructor yang memiliki parameter instance true
// jika tidak memiliki constructor parameter maka false

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);

console.log(myHouse instanceof House); // true