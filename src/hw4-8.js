export function countMinutes() {
  const date = new Date();
  const minutes = date.getHours() * 60 + date.getMinutes();
  console.log(minutes);
}

export function getDayOfWeek(strDate) {
  const date = getDate(strDate, ".");
  const dayNumber = date.getDay();
  const dayOfWeek = convertNumberToDay(dayNumber);
  console.log(dayOfWeek);
}

function convertNumberToDay(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Вс";
    case 1:
      return "Пн";
    case 2:
      return "Вт";
    case 3:
      return "Ср";
    case 4:
      return "Чт";
    case 5:
      return "Пт";
    case 6:
      return "Сб";
    default:
      return "Нет такого дня недели";
  }
}

export function findYounger(bdA, bdZ) {
  const dateA = getDate(bdA, ".");
  const dateZ = getDate(bdZ, ".");
  return dateA.getTime() > dateZ.getTime() ? "A" : "Z";
}

function getDate(strDate, sep) {
  const [day, month, year] = strDate.split(sep);
  const date = new Date(`${year}-${month}-${day}`);
  return date;
}
