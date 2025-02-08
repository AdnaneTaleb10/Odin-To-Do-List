import {
  clearDisplayed,
  displayTasks,
  linkTasksToProjects,
  submitTask,
} from "../../controllers/controller";
import { Task, tasks } from "../../models/tasks";
import { dispalyForm, hide } from "./displayOptions";

const baseModal = document.querySelector("#modal-option");
const createTaskBtn = document.querySelector("#create-task");
const taskForm = document.querySelector("#task-form");
const submitTaskBtn = document.querySelector("#add-task");

export function loadTaskForm() {
  createTaskBtn.addEventListener("click", () => {
    hide(taskForm);
    dispalyForm(taskForm);
  });

  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submitTask(taskForm , baseModal);
  });
}

export function createTask() {
  let taskTitle = document.querySelector("#task-title").value;
  let project = document.querySelector("#projects-dropdown").value;
  let priority = document.querySelector("#task-priority").value;
  let dueDate = document.querySelector("#due-date").value;
  let note = document.querySelector("#project-desrcription").value;

  new Task(taskTitle, project, priority, dueDate, note);
}

loadTaskForm();
