import { countMinutes, getDayOfWeek, findYounger } from "./hw4-8";

describe("countMinutes", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  [
    ["8:00", 480],
    ["8:10", 490],
    ["2:15", 135],
  ].forEach(([time, expectedMinutes]) => {
    it(`calls console log with number of minutes from day start at ${time}`, () => {
      const [hours, minutes] = time.split(":").map(Number);
      jest.spyOn(Date.prototype, "getHours").mockImplementation(() => hours);
      jest
        .spyOn(Date.prototype, "getMinutes")
        .mockImplementation(() => minutes);
      countMinutes();
      expect(console.log).toHaveBeenLastCalledWith(expectedMinutes);
    });
  });
});

describe("getDayOfWeek", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    getDayOfWeek("24.07.2021");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Сб");
  });
});

describe("findYounger", () => {
  it("should work correct", () => {
    expect(findYounger("24.07.2021", "24.02.2001")).toBe("A");
    expect(findYounger("14.07.1334", "24.02.1976")).toBe("Z");
  });
});
