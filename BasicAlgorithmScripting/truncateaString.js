function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.substring(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// cara ringkas
const truncateString2 = (str, num) =>
  str.length <= num ? str : str.substring(0, num) + "...";
console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 8));
