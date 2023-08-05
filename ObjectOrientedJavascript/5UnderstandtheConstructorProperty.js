// untuk mengecek sama seperti instanceof dan lebih baik instanceof

function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    return candidate.constructor === Dog ? true : false
  }

  console.log(joinDogFraternity(new Dog("Snoopy"))); // true