import { Circle } from "./components/Circle/Circle";
import { Square } from "./components/Square/Square";
import { Pentagon } from "./components/Pentagon/Pentagon";
console.clear();

const root = document.getElementById("root");
const circle = Circle();
const square = Square();
const pentagon = Pentagon();

root.append(circle, square, pentagon);
