export function sum(array) {
  return array.reduce((acc, cur) => acc + cur);
}

export function mult2(array) {
  return array.map((value) => value * 2);
}

export function max(array) {
  return Math.max.apply(null, array);
}

export function min(array) {
  return Math.min.apply(null, array);
}
