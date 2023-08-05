// Soal di obj jika sama dengan parameter ke 2 maka cetak
function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  return collection.filter((obj) => {
    return keys.every((key) => obj[key] === source[key]);
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
); // [ { first: 'Tybalt', last: 'Capulet' } ]
