import { renderElement } from "./utils.js";

console.clear();
console.log("hi");

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
  renderElement(data.results);
  console.log(data.results);
}

fetchData();
