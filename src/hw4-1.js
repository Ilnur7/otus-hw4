export function mult(a, b) {
  return a * b;
}

export function sumSymbols(a, b) {
  return a.length + b.length;
}

export function sumDigitNumber(a) {
  return a
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}
