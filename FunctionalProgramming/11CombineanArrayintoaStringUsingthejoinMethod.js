// soal
// sentensify("May-the-force-be-with-you") should return the string May the force be with you.
// Passed:sentensify("The.force.is.strong.with.this.one") should return the string The force is strong with this one.
// Passed:sentensify("There,has,been,an,awakening") should return the string There has been an awakening.

function sentensify(str) {
    // Only change code below this line
  
  return str.split(/[-.,]/).join(' ')
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));