// Soal urlSlug(" Winter Is  Coming") should return [the string winter-is-coming].
function urlSlug(title) {
  const slug = title
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word.toLowerCase())
    .join("-");
  return slug;
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
