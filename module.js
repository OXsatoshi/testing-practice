export function capitalize(stirng) {
  return stirng.replace(stirng.charAt(0), stirng.charAt(0).toUpperCase());
}
export function reverseString(string) {
  return string.split("").reverse().join("");
}
export const calculator = {
  add: (a, b) => {
    return a + b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
  substract: (a, b) => {
    return a - b;
  },
};
export function cesarSepher(string, key) {
  return string
    .split("")
    .map((e) => {
      let codeChar = e.charCodeAt(0);

      if (codeChar <= 122 && codeChar >= 97) {
        console.log("if");
        if (codeChar + key <= 122) return String.fromCharCode(codeChar + key);
        else {
          return String.fromCharCode(codeChar + key + 97 - 123);
        }
      }
      if (codeChar <= 90 && codeChar >= 65) {
        if (codeChar + key <= 90) return String.fromCharCode(codeChar + key);
        else {
          return String.fromCharCode(codeChar + key + 65 - 91);
        }
      }
      return e;
    })
    .join("");
}
export function arrayAnalyzer(arr) {
  let averrage = Calaverage(arr);
  let min = calMin(arr);
  let max = calMax(arr);
  return { averrage, min, max, length: arr.length };
}
function Calaverage(arr) {
  let sum = arr.reduce((a, e) => {
    return (a = a + e);
  }, 0);
  return sum / arr.length;
}
function calMin(arr) {
  return arr.reduce((a, e) => {
    if (a < e) return a;
    else return e;
  }, 999);
}
function calMax(arr) {
  return arr.reduce((a, e) => {
    if (a > e) return a;
    else return e;
  }, 0);
}
console.log(cesarSepher("xyZ aaa", 3));
