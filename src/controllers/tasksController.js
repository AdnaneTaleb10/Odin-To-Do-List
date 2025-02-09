import { tasks } from "../models/tasks";
import newTaskCard from "../models/taskCard";
import { createTask } from "../views/modals/taskForm";
import { clearDisplayed, changeLabelTo } from "./general";
import { hide } from "../views/modals/displayOptions";
import { projects } from "../models/projects";

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

  for (const task of tasks) {
    if (task.project === project.title) {
      let card = newTaskCard(task);
      card.removeAttribute("data-index");
      card.dataset.fullIndex = task.id;
      projectTasks.appendChild(card);
    }
  }

  full.appendChild(projectTasks);
}

export function check(checkbox, index) {
  const cardMinimized = document.querySelector(`[data-index = '${index}']`);
  const cardMaximized = document.querySelector(
    `[data-full-index = '${index}']`
  );

  tasks[index].changeIsDone();

  // Card exists in:
  // minView AND fullView
  if (cardMaximized !== null && cardMinimized !== null) {
    if (checkbox.checked === true) {
      cardMinimized.children[1].firstChild.checked = true;
      cardMaximized.children[1].firstChild.checked = true;
    } else {
      cardMinimized.children[1].firstChild.checked = false;
      cardMaximized.children[1].firstChild.checked = false;
    }
  }

  // Only fullView
  if (cardMaximized !== null && cardMinimized === null) {
    if (checkbox.checked === true) {
      cardMaximized.children[1].firstChild.checked = true;
    } else {
      cardMinimized.children[1].firstChild.checked = false;
    }
  }

  // Only minView
  if (cardMaximized === null && cardMinimized !== null) {
    if (checkbox.checked === true) {
      cardMinimized.children[1].firstChild.checked = true;
    } else {
      cardMinimized.children[1].firstChild.checked = false;
    }
  }
}

export function submitTask(modalToHide, otherModalToHide) {
  createTask();
  clearDisplayed();
  displayTasks();
  changeLabelTo("Home");
  hide(modalToHide);
  hide(otherModalToHide);
}
