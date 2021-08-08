import { addText, clearInput, deleteSixthElem } from "./hw4-7";

describe("addText", () => {
  it("is a function", () => {
    expect(addText).toBeInstanceOf(Function);
  });

  it("should work correct", () => {
    const el = document.createElement("div");
    el.innerHTML = `
    <p>p1</p>
    <p>p2</p>
    `;
    addText(el, "p3");
    expect(el.innerHTML).toBe(`
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>`);
  });
});

describe("clearInput", () => {
  it("is a function", () => {
    expect(clearInput).toBeInstanceOf(Function);
  });

  it("should work correct", () => {
    const el = document.createElement("input");
    el.value = "qq";
    clearInput(el);
    expect(el.value).toBe("");
  });
});

describe("deleteSixthElem", () => {
  it("is a function", () => {
    expect(deleteSixthElem).toBeInstanceOf(Function);
  });

  it("should work correct", () => {
    const el = document.createElement("div");
    [1, 2, 3, 4, 5].forEach((index) => {
      el.insertAdjacentHTML("beforeend", `<p>p${index}</p>`);
    });

    addText(el, "p6");

    const nodeList = el.querySelectorAll("div p");
    deleteSixthElem(nodeList);

    expect(el.innerHTML).toBe(`<p>p2</p><p>p3</p><p>p4</p><p>p5</p><p>p6</p>`);
  });
});
