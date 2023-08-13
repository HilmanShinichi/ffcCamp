//Soal
// myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
// myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
// myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
// myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, after);
  } else {
    if (before[0] === before[0].toLowerCase())
      after = after[0].toLowerCase() + after.slice(1);
    return str.replace(before, after);
  }
}

console.log(myReplace("Let us go to the store", "store", "mall")); // Let us go to the mall
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down")); // I think we should look down there
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // His name is John
console.log(myReplace("His name is Tom", "Tom", "john")); // His name is John
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
); // Let us get back to more Algorithms
