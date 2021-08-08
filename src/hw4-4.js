export function getUser(age) {
  const user = {
    name: "John",
    age,
  };
  return user;
}

export function getCopyObject() {
  const user = getUser(20);
  const admin = Object.assign(user, { role: "Admin" });
  return admin;
}

export function separateVar() {
  const admin = getCopyObject();
  const { age, name, role } = admin;
  console.log(`age: ${age}, name: ${name}, role: ${role}`);
}
