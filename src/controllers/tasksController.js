import { tasks } from "../models/tasks";
import newTaskCard from "../models/taskCard";
import { createTask } from "../views/modals/taskForm";
import { clearDisplayed, changeLabelTo, linkTasksToProjects } from "./general";
import { hide } from "../views/modals/displayOptions";
import { projects } from "../models/projects";
import { expandProject } from "../views/full-view/expandProject";
import { removeAllExpanded } from "../views/full-view/expandCommun";

const fullView = document.querySelector("#full-view");
const minView = document.querySelector("#min-view");

export function displayTasks() {
  for (let task of tasks) {
    minView.appendChild(newTaskCard(task));
  }
}

export function displayTasksOfProjects(project) {
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

function clearProjectTasks() {
  const fullView = document.querySelector("#full-view");
  fullView.lastChild.remove();
}

export function submitTask(modalToHide, otherModalToHide) {
  createTask();
  clearDisplayed();
  displayTasks();
  changeLabelTo("Home");
  hide(modalToHide, otherModalToHide);
}

export function removeTask(index) {
  const tasksInMinView = document.querySelector(`[data-index='${index}']`);
  const tasksInProjectEpanded = document.querySelector(
    `[data-full-index = '${index}']`
  );
  const taskExpanded = document.querySelector(`[data-expanded = '${index}']`);
  const projectExpanded = document.querySelector("[data-proj-index]");
  console.log(projectExpanded);
  tasks[index].delete();

  if (tasksInMinView !== null) {
    clearDisplayed();
    displayTasks();
  }

  if (tasksInProjectEpanded !== null) {
    clearProjectTasks();
    displayTasksOfProjects(projects[projectExpanded.dataset.projIndex]);
  }

  if (taskExpanded !== null) {
    removeAllExpanded();
  }
}

export function check(checkbox, index) {
  /*   const cardMinimized = document.querySelector(`[data-index = '${index}']`);
  const cardMaximized = document.querySelector(
    `[data-full-index = '${index}']`
  ); */

  const taskInMinView = document.querySelector(`[data-index='${index}']`);
  const taskInProjectExpanded = document.querySelector(
    `[data-full-index='${index}']`
  );
  const taskExpanded = document.querySelector(`[data-expanded='${index}']`);

  tasks[index].changeIsDone();

  // Card exists in:
  // minView AND fullView
  if (taskInMinView !== null && taskExpanded !== null) {
    if (checkbox.checked === true) {
      taskInMinView.children[1].firstChild.checked = true;
      taskExpanded.children[2].lastChild.checked = true;
    } else {
      taskInMinView.children[1].firstChild.checked = false;
      taskExpanded.children[2].lastChild.checked = false;
    }
  }

  // minView AND fullView
  if (taskInMinView !== null && taskInProjectExpanded !== null) {
    if (checkbox.checked === true) {
      taskInMinView.children[1].firstChild.checked = true;
      taskExpanded.children[2].lastChild.checked = true;
    } else {
      taskInMinView.children[1].firstChild.checked = false;
      taskExpanded.children[1].lastChild.checked = false;
    }
  }

  // Only minView
  if (taskInMinView !== null && taskInProjectExpanded === null) {
    if (checkbox.checked === true) {
      taskInMinView.children[1].firstChild.checked = true;
    } else {
      taskInMinView.children[1].firstChild.checked = false;
    }
  }

  // Only fullView
  if (taskInMinView == null && taskInProjectExpanded !== null) {
    if (checkbox.checked === true) {
      taskInProjectExpanded.children[1].firstChild.checked = true;
    } else {
      taskInProjectExpanded.children[1].firstChild.checked = false;
    }
  }
}
