export function iterator() {
  for (let i = 50; i < 100; i++) {
    console.log(i);
  }
}

export function multTable() {
  for (let i = 1; i <= 9; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

export function average(n) {
  let sum = 0;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      sum += i;
      count++;
    }
  }
  return sum / count;
}
