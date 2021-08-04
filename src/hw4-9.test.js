import {
  isRectangular,
  calcCircleData,
  calcRootQuadraticEquation,
} from "./hw4-9";

describe("isRectangular", () => {
  it("should work correct", () => {
    expect(isRectangular(5, 4, 3)).toBe(true);
    expect(isRectangular(1, 7, 4)).toBe(false);
  });
});

describe("calcCircleData", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    calcCircleData(5);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("31.42", "78.54");
  });
});

describe("calcRootQuadraticEquation", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    calcRootQuadraticEquation(1, -4, 4);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("x = 2");
    calcRootQuadraticEquation(2, -1, -15);
    expect(console.log).toHaveBeenCalledWith("x1 = -2.5, x2 = 3");
  });
});
