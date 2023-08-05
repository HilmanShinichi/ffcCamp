function findLongestWordLength(str) {
  let maxWord = "";
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxWord.length) {
      maxWord = strArr[i];
    }
  }
  return maxWord.length;
}

console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow otorhinolaryngology"
  )
);
