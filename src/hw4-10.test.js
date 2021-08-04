import { validDate, validEmail, validPhone } from "./hw4-10";

describe("validDate", () => {
  it("should work correct", () => {
    expect(validDate("24-11-1432")).toBe(true);
    expect(validDate("32-12-1345")).toBe(false);
  });
});

describe("validEmail", () => {
  it("should work correct", () => {
    expect(validEmail("vasya@mail.ru")).toBe(true);
    expect(validEmail("vasya@gmail.com")).toBe(true);
    expect(validEmail("32-12-1345")).toBe(false);
  });
});

describe("validPhone", () => {
  it("should work correct", () => {
    expect(validPhone("123-456-7890")).toBe(true);
    expect(validPhone("4543534")).toBe(false);
  });
});
