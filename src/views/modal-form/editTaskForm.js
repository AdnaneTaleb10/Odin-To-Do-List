import { id } from "date-fns/locale";
import { clearDisplayed, clearProjectTasks } from "../../controllers/general";
import { displayProjects } from "../../controllers/projectsController";
import {
  displayTasks,
  displayTasksOfProjects,
} from "../../controllers/tasksController";
import { projects } from "../../models/projects";
import { tasks } from "../../models/tasks";
import { removeAllExpanded } from "../full-view/expandCommun";
import { expandTask } from "../full-view/expandTask";
import {
  dispalyForm,
  getCurrentExpanded,
  hide,
  unhide,
} from "./displayOptions";
import { loadAvailableProjects } from "./taskForm";

const baseModal = document.querySelector("#modal-option");
const editTaskForm = document.querySelector("#edit-task-form");
const editTaskBtn = document.querySelector("#edit-task");

let indexTaskToEdit;

export function loadEditTaskForm() {
  editTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    saveChanges(indexTaskToEdit);
  });
}

function saveChanges(indexTaskToEdit) {
  const title = document.querySelector("#edit-task-title");
  const project = document.querySelector("#edit-projects-dropdown").value;
  const priority = document.querySelector("#edit-task-priority").value;
  const dueDate = document.querySelector("#edit-due-date").value;
  const notes = document.querySelector("#edit-task-notes").value;
  let lastTitle = tasks[indexTaskToEdit].value;

  if (title.value !== "") {
    tasks[indexTaskToEdit].edit(title.value, project, priority, dueDate, notes);
    hide(baseModal, editTaskForm);
    updateIfInMinView(indexTaskToEdit);
    updateIfExpanded(indexTaskToEdit);
    updateIfInFullView(indexTaskToEdit);
    title.classList.remove("invalid");
  } else {
    alert("Can't have two tasks with the same title");
    title.classList.add("invalid");
  }
}

export function displayEditTaskForm(i) {
  indexTaskToEdit = i;
  loadAvailableProjects();
  unhide(baseModal);
  dispalyForm(editTaskForm);
  const title = document.querySelector("#edit-task-title");
  const project = document.querySelector("#edit-projects-dropdown");
  const priority = document.querySelector("#edit-task-priority");
  const dueDate = document.querySelector("#edit-due-date");
  const notes = document.querySelector("#edit-task-notes");

  /**
  * var e = document.getElementById("ddlViewBy");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
  */

  title.value = tasks[i].title;
  project.value = tasks[i].project;
  priority.value = tasks[i].priority;
  dueDate.value = tasks[i].dueDate;
  notes.value = tasks[i].notes;
}

function updateIfExpanded(id) {
  const expanded = document.querySelector(`[data-index='${id}']`);
  if (expanded !== null) {
    removeAllExpanded();
    expandTask(id);
  }
}

function updateIfInMinView(id) {
  const minView = document.querySelector(`[data-index='${id}']`);
  if (minView !== null) {
    clearDisplayed();
    displayTasks();
  }
}

function updateIfInFullView(id) {
  const fullView = document.querySelector(`[data-full-index='${id}']`);
  if (fullView !== null) {
    clearProjectTasks();
    displayTasksOfProjects(projects[getCurrentExpanded()]);
  }
}

loadEditTaskForm();
