import { mult, sumSymbols, sumDigitNumber } from "./hw4-1";

describe("multiplication", () => {
  it("should work correct", () => {
    expect(mult(2, 3)).toBe(6);
  });
});

describe("sumSymbols", () => {
  it("should work correct", () => {
    expect(sumSymbols("one", "five")).toBe(7);
  });
});

describe("sumDigitNumber", () => {
  it("should work correct", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "456");
    expect(sumDigitNumber()).toBe(15);
  });
});
