//Soal
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// Passed:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// Passed:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function pairElement(str) {
  const sp = str.split("");
  const result = [];
  sp.forEach((el) => {
    switch (el) {
      case "G":
        result.push(["G", "C"]);
        break;
      case "C":
        result.push(["C", "G"]);
        break;
      case "T":
        result.push(["T", "A"]);
        break;
      case "A":
        result.push(["A", "T"]);
        break;
      default:
        console.log("default");
    }
  });
  return result;
}

console.log(pairElement("ATCGA"));
