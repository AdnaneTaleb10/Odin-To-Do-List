/* import { tasks } from "../models/tasks"; */
import tasks from "../storage/taskStorage";
import newTaskCard from "../models/taskCard";
import { createTask } from "../views/modal-form/taskForm";
import { clearDisplayed, changeLabelTo, linkTasksToProjects } from "./general";
import { hide } from "../views/modal-form/displayOptions";


const fullView = document.querySelector("#full-view");
const minView = document.querySelector("#min-view");

function displayTasks() {
  for (let task of tasks) {
    minView.appendChild(newTaskCard(task));
  }
}

function displayTasksOfProjects(project) {
  const projectTasks = document.createElement("div");
  projectTasks.id = "full-project-tasks-div";

  for (const task of tasks) {
    if (task.project === project.title) {
      let card = newTaskCard(task);
      card.removeAttribute("data-index");
      card.dataset.fullIndex = task.id;
      projectTasks.appendChild(card);
    }
  }

  fullView.appendChild(projectTasks);
}

function submitTask(modalToHide, otherModalToHide) {
  createTask();
  clearDisplayed();
  displayTasks();
  changeLabelTo("Home");
  hide(modalToHide, otherModalToHide);
}

export { displayTasks, displayTasksOfProjects, submitTask };
