console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages containe
  console.log("cklicked");
  toastContainer.innerHTML = "";
  const newListItem = document.createElement("li");
  newListItem.classList.add("toast-container__message");
  newListItem.textContent = "I am a new Toastmessage.";

  newListItem.innerHTML = `<h2>new Section`;

  toastContainer.append(newListItem);
});

const newListItem = document.createElement("li");
  newListItem.classList.add("toast-container__message");
  newListItem.textContent = "I am a new Toastmessage.";

  newListItem.innerHTML = `<h2>new Section`;

  toastContainer.append(newListItem);

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast

  toastContainer.innerHTML = "";
});
