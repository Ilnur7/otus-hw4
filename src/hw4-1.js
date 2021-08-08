export function mult(a, b) {
  return a * b;
}

export function sumSymbols(a, b) {
  return a.length + b.length;
}

export function sumDigitNumber() {
  const number = prompt("Введите трехзначное число");
  return number
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}
