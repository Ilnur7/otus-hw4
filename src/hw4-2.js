export function max(a, b) {
  return a > b ? a : b;
}

export function convertNumberToMonth(a) {
  switch (a) {
    case 1:
      return "Январь";
    case 2:
      return "Февраль";
    case 3:
      return "Март";
    case 4:
      return "Апрель";
    case 5:
      return "Май";
    case 6:
      return "Июнь";
    case 7:
      return "Июль";
    case 8:
      return "Август";
    case 9:
      return "Сентябрь";
    case 10:
      return "Октябрь";
    case 11:
      return "Ноябрь";
    case 12:
      return "Декабрь";
    default:
      return "Нет месяца соответсвующему такому числу";
  }
}

export function compareFigure(circle, square) {
  const lengthSquare = Math.sqrt(square) / 2;
  const radiusCircle = Math.sqrt(circle / Math.PI);
  return radiusCircle <= lengthSquare;
}
