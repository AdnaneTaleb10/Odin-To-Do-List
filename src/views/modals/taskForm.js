import { dispalyForm, hide } from "./displayOptions";

const createTaskBtn = document.querySelector("#create-task");
const taskForm = document.querySelector("#task-form");
const submitTaskBtn = document.querySelector("#add-task");

export default function loadTaskForm() {
  createTaskBtn.addEventListener("click", () => {
    hide(taskForm);
    dispalyForm(taskForm);
  });
}

loadTaskForm();
