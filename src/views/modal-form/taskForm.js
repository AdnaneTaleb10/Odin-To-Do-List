/* import { Task, tasks } from "../../models/tasks"; */
import { Task } from "../../models/tasks";
import tasks from "../../storage/taskStorage";
import { dispalyForm, getCurrentExpanded, hide } from "./displayOptions";
import { submitTask } from "../../controllers/tasksController";
import { expandProject, removeAllExpanded } from "../full-view/expandProject";
import projects from "../../storage/projectStorage";

const baseModal = document.querySelector("#modal-option");
const createTaskBtn = document.querySelector("#create-task");
const taskForm = document.querySelector("#task-form");
const submitTaskBtn = document.querySelector("#add-task");

export function loadTaskForm() {
  createTaskBtn.addEventListener("click", () => {
    loadAvailableProjects();
    hide(taskForm);
    dispalyForm(taskForm);
  });

  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submitTask(taskForm, baseModal);
    updateProjectDisplayed();
  });
}

export function createTask() {
  let taskTitle = document.querySelector("#task-title").value;
  let project = document.querySelector("#projects-dropdown");
  let projectName = project.options[project.selectedIndex].text;
  let priority = document.querySelector("#task-priority").value;
  let dueDate = document.querySelector("#due-date").value;
  let note = document.querySelector("#project-desrcription").value;

  let task = new Task(taskTitle, projectName, priority, dueDate, note);
  return task;
}

export function loadAvailableProjects() {
  const storedProjects = projects.getAllProjects();
  const options = document.querySelector("#projects-dropdown");
  const editOptions = document.querySelector("#edit-projects-dropdown");

  do {
    options.lastChild.remove();
  } while (
    options.lastChild.value !== "" ||
    options.lastChild.textContent !== "None"
  );

  for (let i = 0; i < storedProjects.length; i++) {
    options.appendChild(createOption(storedProjects[i].title));
  }

  do {
    editOptions.lastChild.remove();
  } while (
    editOptions.lastChild.value !== "" ||
    editOptions.lastChild.textContent !== "None"
  );

  for (let i = 0; i < storedProjects.length; i++) {
    editOptions.appendChild(createOption(storedProjects[i].title));
  }
}

function createOption(value) {
  let option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  return option;
}

function updateProjectDisplayed() {
  const fullView = document.querySelector("#full-view");
  if (fullView.firstElementChild.id === "full-project-div") {
    expandProject(getCurrentExpanded());
  }
}

loadTaskForm();

