function translatePigLatin(str) {
    if (str.match(/^[aiueo]/i)) {
      return str + 'way';
    } else if (!str.match(/[aiueo]/i)) {
      return str + 'ay';
    } else {
      return str.replace(/^([^aiueo]+)(\w+)/i, '$2$1ay');
    }
  }
  
  console.log(translatePigLatin("rhythm")); //rhythmay
  console.log(translatePigLatin("california")); // aliforniacay
  console.log(translatePigLatin("glove")); // oveglay
  console.log(translatePigLatin("algorithm")); // algorithmway
  console.log(translatePigLatin("eight")); // eightway
  console.log(translatePigLatin("schwartz")); // artzschway
  