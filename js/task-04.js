// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const spanEl = document.querySelector("#value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementEl.addEventListener("click", onDecrementBtnClick);
incrementEl.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
  console.log(spanEl.textContent);
}
function onIncrementBtnClick() {
  counterValue += 1;
  spanEl.textContent = counterValue;
  console.log(spanEl.textContent);
}
