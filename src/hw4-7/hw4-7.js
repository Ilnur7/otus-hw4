export function deleteSixthElem(paragraphs) {
  if (paragraphs.length > 5) {
    paragraphs[0].parentElement.removeChild(paragraphs[0]);
  }
}

export function addText(el, text) {
  el.insertAdjacentHTML("beforeend", `<p>${text}</p>`);
}

export function clearInput(el) {
  const input = el;
  input.value = "";
}
