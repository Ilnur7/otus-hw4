export function diff(a, b) {
  return Math.abs(a - b);
}

export function isWord(str) {
  const arr = str.split(" ");
  return arr.length === 1;
}

export function pow(a, x) {
  let result = 1;
  for (let i = 0; i < x; i++) {
    result *= a;
  }
  return result;
}
