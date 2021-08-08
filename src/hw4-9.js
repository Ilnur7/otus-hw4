function validRectangular(hypotenuse, a, b, c) {
  switch (hypotenuse) {
    case a:
      return b * b + c * c === a * a;
    case b:
      return a * a + c * c === b * b;
    case c:
      return b * b + a * a === c * c;
    default:
      break;
  }
}

export function isRectangular(a, b, c) {
  const hypotenuse = Math.max.apply(null, [a, b, c]);
  return validRectangular(hypotenuse, a, b, c);
}

export function calcCircleData(r) {
  const length = (2 * Math.PI * r).toFixed(2);
  const square = (Math.PI * r * r).toFixed(2);
  console.log(length, square);
}

export function calcRootQuadraticEquation(a, b, c) {
  const d = b * b - 4 * a * c;
  if (d > 0) {
    const x1 = (-b - Math.sqrt(d)) / (2 * a);
    const x2 = (-b + Math.sqrt(d)) / (2 * a);
    console.log(`x1 = ${x1}, x2 = ${x2}`);
  } else if (d === 0) {
    const x = -b / (2 * a);
    console.log(`x = ${x}`);
  } else {
    console.log("no solution");
  }
}
