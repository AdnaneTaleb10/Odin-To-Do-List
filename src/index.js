import "./css/style.css";
import setLogo from "./modules/logo";
import { Task, pushTask } from "./modules/taskControls";
import { Project, pushProject } from "./modules/projectControls";
import { loadHome, loadProjects } from "./modules/tab";
import modals from "./modules/modals";
import loadFilter from "./modules/prioritiesFilter";
import expandTask from "./modules/expanded";

let tasksArr = [];
let projectsArr = [];

pushTask(
  new Task(
    "Header",
    "Restaurant Page",
    "High",
    "2024-10-06",
    "Header components: Logo, dark/light mode theme icon, and login button"
  )
);
pushTask(new Task("Nav", "Dashboard", "low", "2024-12-07", "nav icons"));
pushTask(
  new Task(
    "IDs and Classes best practices",
    "",
    "medium",
    "2024-10-13",
    "Gotta have a clean code huh?"
  )
);
pushProject(new Project("To-do list", "teste.com", "Ah sei lá n sei oq"));
pushProject(new Project("Outro projeto", "", "Ah sei lá n sei oq"));

function clearCards() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((element) => {
    element.remove();
  });
}

function setDatasetIndex() {
  let index = 0;
  const elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    element.dataset.index = index;
    index++;
  });
}

setLogo();

(window.onload = modals()), loadHome(), loadProjects(), loadFilter();

/* expandTask(0); */

export { tasksArr, projectsArr, clearCards, setDatasetIndex };
