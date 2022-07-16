// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const InputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

InputEl.addEventListener("input", userInput);

function userInput(event) {
  spanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  }
}
