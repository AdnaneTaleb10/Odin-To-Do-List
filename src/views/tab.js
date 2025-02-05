import { clearDisplayed, displayTasks } from "../controllers/controller";

const homeBtn = document.querySelector("#home");
const projBtn = document.querySelector("#projects");

export default function loadTab() {
  homeBtn.addEventListener("click", () => {
    clearDisplayed();
    displayTasks();
  });

  projBtn.addEventListener("click", () => {
    clearDisplayed();
  });
}

loadTab();
