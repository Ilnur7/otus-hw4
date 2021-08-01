import { getUser, getCopyObject, separateVar } from "./hw4-4";

describe("getUser", () => {
  it("should work correct", () => {
    expect(getUser(10).name).toBe("John");
    expect(getUser(10).age).toBe(10);
  });
});

describe("getCopyObject", () => {
  it("should work correct", () => {
    expect(getCopyObject().name).toBe("John");
    expect(getCopyObject().age).toBe(20);
    expect(getCopyObject().role).toBe("Admin");
  });
});

describe("separateVar", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    separateVar();
    expect(console.log).toHaveBeenCalledWith(
      "age: 20, name: John, role: Admin"
    );
  });
});
