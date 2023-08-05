function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  
  
  let cek = Object.prototype.isPrototypeOf(Dog.prototype);
  
  console.log(cek)