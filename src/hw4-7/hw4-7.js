const button = document.querySelector(".button");
button.hidden = true;
button.addEventListener("click", buttonClick);

const input = document.querySelector(".input");
input.addEventListener("input", hideButton);

function hideButton() {
  button.hidden = input.value === "";
}

function buttonClick() {
  const text = getInputText();
  addText(text);
  clearInput();
  button.hidden = true;
}

function getInputText() {
  return input.value;
}

function addText(text) {
  const p = document.createElement("p");
  p.innerText = text;

  const div = document.querySelector(".parent-p");
  div.append(p);

  const paragraphs = document.querySelectorAll(".parent-p p");
  if (paragraphs.length > 5) {
    div.removeChild(paragraphs[0]);
    /* const firstChild = document.querySelector('.parent-p p:first-child');
        firstChild.remove()
        div.removeChild(firstChild) */
  }
}

function clearInput() {
  input.value = "";
}
