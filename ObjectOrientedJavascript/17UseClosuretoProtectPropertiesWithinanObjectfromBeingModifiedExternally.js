// agar properti tidak akses langsung jadi gunakan getter karena js tidk mendukung akses modifier

function Bird() {
    let weight = 15;
  
     this.getWeight = function() { 
      return weight;
    };
  }
  
  let duck = new Bird()
  
  console.log(duck.getWeight())