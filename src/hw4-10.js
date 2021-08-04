export function validDate(str) {
  return (
    str.search(/^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-\d{4}$/) !== -1
  );
}

export function validEmail(str) {
  return str.search(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/) !== -1;
}

export function validPhone(str) {
  return (
    str.search(
      /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im
    ) !== -1
  );
}
