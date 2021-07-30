import { average, multTable, iterator } from "./hw4-3";

describe("average", () => {
  it("should work correct", () => {
    expect(average(10)).toBe(5);
  });
});

describe("multTable", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    multTable();
    expect(console.log).toHaveBeenCalledTimes(9);
    expect(console.log).toHaveBeenLastCalledWith("7 x 9 = 63");
  });
});

describe("iterator", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    iterator();
    expect(console.log).toHaveBeenCalledTimes(50);
    expect(console.log).toHaveBeenLastCalledWith(99);
  });
});
