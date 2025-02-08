import { changeLabelTo, clearDisplayed, displayProjects, displayTasks } from "../controllers/controller";

const homeBtn = document.querySelector("#home");
const projBtn = document.querySelector("#projects");

export default function loadTab() {
  homeBtn.addEventListener("click", () => {
    clearDisplayed();
    displayTasks();
    changeLabelTo("Home");
  });

  projBtn.addEventListener("click", () => {
    clearDisplayed();
    displayProjects();
    changeLabelTo("Projects")
  });
}

loadTab();
