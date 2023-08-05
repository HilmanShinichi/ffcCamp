//untuk mengecek dog apakah parent dari beagle

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

let cek = Dog.prototype.isPrototypeOf(beagle);
console.log(cek) // true