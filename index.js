import { clicker } from "./src/modules/clickListener.js";

console.log("good");

document.addEventListener("click", (e) => {
  clicker(e.target);
});
