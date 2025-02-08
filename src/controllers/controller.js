import { projects } from "../models/projects";
import { tasks, Task } from "../models/tasks";
import newTaskCard from "../models/taskCard";
import newProjectCard from "../models/projectCard";
import create from "../modules/domCreate";
import { createTask } from "../views/modals/taskForm";
import { createProj } from "../views/modals/projectForm";
import { hide } from "../views/modals/displayOptions";

const minView = document.querySelector("#min-view");

export function updateIds(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i;
  }
}

export function displayTasks() {
  for (let task of tasks) {
    minView.appendChild(newTaskCard(task));
  }
}

export function displayProjects() {
  for (let proj of projects) {
    minView.appendChild(newProjectCard(proj));
  }
}

export function clearDisplayed() {
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

export function changeLabelTo(what) {
  document.querySelector("#current-tab").textContent = what;
}

export function submitTask(modalToHide , otherModalToHide) {
  createTask();
  clearDisplayed();
  displayTasks();
  changeLabelTo("Home");
  hide(modalToHide);
  hide(otherModalToHide);
}

export function submitProj(modalToHide , otherModalToHide){
  createProj();
  clearDisplayed();
  displayProjects();
  hide(modalToHide);
  hide(otherModalToHide);
  
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
