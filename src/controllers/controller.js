import { projects } from "../models/projects";
import { tasks } from "../models/tasks";
import newTaskCard from "../views/modals/taskCard";

const minView = document.querySelector("#min-view");

export function updateIds(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i;
  }
}

export function displayTasks() {
  console.log(tasks);
  for (let task of tasks) {
    minView.appendChild(newTaskCard(task));
  }
}

export function clearDisplayed() {
  if (minView.firstElementChild) {
    do {
      minView.firstElementChild.remove();
    } while (minView.firstElementChild);
  }
}

export function linkTasksToProjects() {
  for (let task of tasks) {
    for (let project of projects) {
      if (task.project === project.title) {
        project.addTask(task);
      }
    }
  }
}
