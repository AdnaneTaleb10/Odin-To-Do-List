import { tasks } from "../models/tasks";
import newTaskCard from "../models/taskCard";
import { createTask } from "../views/modals/taskForm";
import { clearDisplayed, changeLabelTo } from "./general";
import { hide } from "../views/modals/displayOptions";

const full = document.querySelector("#full-view");
const minView = document.querySelector("#min-view");

export function displayTasks() {
  for (let task of tasks) {
    minView.appendChild(newTaskCard(task));
  }
}

export function displayTasksOfProjects(project) {
  const projectTasks = document.createElement("div");
  projectTasks.id = "full-project-tasks-div";

  for (let task of tasks) {
    if (task.project === project.title) {
      projectTasks.appendChild(newTaskCard(task));
    }
  }

  full.appendChild(projectTasks);
}

export function submitTask(modalToHide, otherModalToHide) {
  createTask();
  clearDisplayed();
  displayTasks();
  changeLabelTo("Home");
  hide(modalToHide);
  hide(otherModalToHide);
}
