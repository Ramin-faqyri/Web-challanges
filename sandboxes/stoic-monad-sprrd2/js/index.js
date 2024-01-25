console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkChoiceButton = document.querySelector('[data-js="dark-mode-button"]');
const lightChoiceButton = document.querySelector(
  '[data-js="light-mode-button"]'
);
const toggleChoiceButton = document.querySelector('[data-js="toggle-button"]');

// 3. This event listener is connected properly. When clicked the button is shown active. However, the debug message doesn't appear in the debug console. Where is the error with this code?
darkChoiceButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightChoiceButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleChoiceButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("changed background-color");
});
