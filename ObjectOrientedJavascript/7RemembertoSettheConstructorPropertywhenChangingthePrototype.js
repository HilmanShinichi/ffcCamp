function Dog(name) {
  this.name = name;
}


Dog.prototype = {
  constructor : Dog,
  numLegs: 4,
  eat: function() {
    return "nom nom nom";
  },
  describe: function() {
    return "My name is " + this.name;
  }
};

const pluto = new Dog("pluto");

console.log(pluto.numLegs);