import { addText, deleteSixthElem, clearInput } from "./hw4-7";

addEventListeners();

function addEventListeners() {
  const button = document.querySelector(".button");
  button.hidden = true;
  button.addEventListener("click", buttonClick);

  const input = document.querySelector(".input");
  input.addEventListener("input", hideButton);
}

function buttonClick() {
  const button = document.querySelector(".button");
  const div = document.querySelector(".parent-p");
  const input = document.querySelector(".input");
  const paragraphs = document.querySelectorAll(".parent-p p");

  const text = input.value;
  addText(div, text);
  deleteSixthElem(paragraphs);
  clearInput(input);
  button.hidden = true;
}

function hideButton() {
  const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  button.hidden = input.value === "";
}
