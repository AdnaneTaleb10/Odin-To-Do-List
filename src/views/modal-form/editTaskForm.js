import { id } from "date-fns/locale";
import { clearDisplayed, clearProjectTasks } from "../../controllers/general";
import { displayProjects } from "../../controllers/projectsController";
import {
  displayTasks,
  displayTasksOfProjects,
} from "../../controllers/tasksController";
import projects from "../../storage/projectStorage";
import tasks from "../../storage/taskStorage";
import { removeAllExpanded } from "../full-view/expandCommun";
import {
  dispalyForm,
  getCurrentExpanded,
  hide,
  unhide,
} from "./displayOptions";
import { expandTask } from "../full-view/expandTask";
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

  if (title.value !== "") {
    tasks.editTask(
      indexTaskToEdit,
      title.value,
      project,
      priority,
      dueDate,
      notes
    );
    hide(baseModal, editTaskForm);
    updateIfInMinView(indexTaskToEdit);
    updateIfExpanded(indexTaskToEdit);
    updateIfInFullView(indexTaskToEdit);
    updateIfProjectExpanded();
    title.classList.remove("invalid");
  } else {
    alert("Can't have two tasks with the same title");
    title.classList.add("invalid");
  }
}

export function displayEditTaskForm(i) {
  const storedTasks = tasks.getAllTasks();
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

  title.value = storedTasks[i].title;
  project.value = storedTasks[i].project;
  priority.value = storedTasks[i].priority;
  dueDate.value = storedTasks[i].dueDate;
  notes.value = storedTasks[i].notes;
}

function updateIfExpanded(id) {
  const expanded = document.querySelector(`[data-expanded='${id}']`);
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
  let projecsArr = projects.getAllProjects();
  if (fullView !== null) {
    clearProjectTasks();
    displayTasksOfProjects(projecsArr[getCurrentExpanded()]);
  }
}

function updateIfProjectExpanded() {
  const expanded = document.querySelector("#full-view").firstElementChild;
  let projectsArr = projects.getAllProjects();
  if (expanded !== null) {
    const projectIndex = expanded.firstElementChild.dataset.projIndex;
    console.log(projectIndex);
    clearProjectTasks();
    displayTasksOfProjects(projectsArr[projectIndex]);
  }
}

loadEditTaskForm();
