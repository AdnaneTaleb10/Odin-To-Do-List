import create from "../others/domCreate";
/* import { tasks } from "../models/tasks";
import { projects } from "../models/projects"; */
import tasks from "../storage/taskStorage";
import projects from "../storage/projectStorage";

const minView = document.querySelector("#min-view");

function updateIds(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i;
  }
}

function clearDisplayed() {
  // Since the tab label is one of the childs, there's the need to create it again
  let label = document.querySelector("#current-tab").textContent;
  if (minView.firstElementChild) {
    do {
      minView.firstElementChild.remove();
    } while (minView.firstElementChild);
  }

  let currentTab = create.createElementWithID("div", "current-tab");
  currentTab.textContent = label;
  minView.appendChild(currentTab);
}

function changeLabelTo(what) {
  document.querySelector("#current-tab").textContent = what;
}

function clearProjectTasks() {
  const fullView = document.querySelector("#full-view");
  fullView.lastChild.remove();
}

export { updateIds, clearDisplayed, changeLabelTo, clearProjectTasks };
