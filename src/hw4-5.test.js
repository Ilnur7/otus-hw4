import { sum, mult2, max, min } from "./hw4-5";

describe("sum", () => {
  it("should work correct", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe("mult2", () => {
  it("should work correct", () => {
    expect(mult2([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
  });
});

describe("max", () => {
  it("should work correct", () => {
    expect(max([1, 2, 3, 4, 5])).toBe(5);
  });
});

describe("min", () => {
  it("should work correct", () => {
    expect(min([1, 2, 3, 4, 5])).toBe(1);
  });
});
