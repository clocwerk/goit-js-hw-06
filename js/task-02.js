// 1  Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2  Додасть назву інгредієнта як його текстовий вміст.
// 3  Додасть елементу клас item.
// 4  Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(
  ...ingredients.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = `${item}`;
    itemEl.classList.add(item);
    return itemEl;
  })
);
