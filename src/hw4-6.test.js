import { diff, isWord, pow } from "./hw4-6";

describe("diff", () => {
  it("should work correct", () => {
    expect(diff(2, 7)).toBe(5);
    expect(diff(7, 2)).toBe(5);
  });
});

describe("isWord", () => {
  it("should work correct", () => {
    expect(isWord("should work correct")).toBe(false);
    expect(isWord("should")).toBe(true);
  });
});

describe("pow", () => {
  it("should work correct", () => {
    expect(pow(4, 3)).toBe(64);
  });
});
