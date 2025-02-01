import { clearCards } from "..";
import { displayProjects } from "./projectControls";
import { displayTask } from "./taskControls";

const homeBtn = document.querySelector("#home");
const projectsBtn = document.querySelector("#projects");
let lastTab = "Home";

function loadHome() {
  displayTask();

  homeBtn.addEventListener("click", () => {
    lastTab = "Home";
    clearCards();
    changeTabLabelTo("Home");
    displayTask();
  });
}

function loadProjects() {
  projectsBtn.addEventListener("click", () => {
    lastTab = "Projects";
    clearCards();
    changeTabLabelTo("Projects");
    displayProjects();
  });
}

function changeTabLabelTo(newTab) {
  const currentTab = document.querySelector("#current-tab");
  currentTab.textContent = newTab;
}

export { lastTab, loadHome, loadProjects, changeTabLabelTo };
