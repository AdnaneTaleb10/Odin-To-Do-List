import { changeLabelTo, clearDisplayed } from "../controllers/general";
import { displayProjects } from "../controllers/projectsController";
import { displayTasks } from "../controllers/tasksController";

let lastTab = "Home";

const homeBtn = document.querySelector("#home");
const projBtn = document.querySelector("#projects");

function loadTab() {
  homeBtn.addEventListener("click", () => {
    clearDisplayed();
    displayTasks();
    changeLabelTo("Home");
    lastTab = "Home";
  });

  projBtn.addEventListener("click", () => {
    clearDisplayed();
    displayProjects();
    changeLabelTo("Projects");
    lastTab = "Projects";
  });
}

loadTab();

export { loadTab, lastTab };
