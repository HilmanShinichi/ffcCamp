function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
   numLegs: 4,
   eat(){
     console.log('nyam nyam nyam');
   },
   describe(){
     console.log(`My name is ${this.name}`)
   }
  };
  
  const pluto = new Dog('pluto')
  pluto.describe() // My name is pluto