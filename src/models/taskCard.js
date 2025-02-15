import { check, removeTask } from "../controllers/tasksController";
import create from "../others/domCreate";
import { expandTask } from "../views/full-view/expandTask";

export default function newTaskCard(task) {
  const cardDiv = create.createElementWithClass("div", "task-card");
  const priority = create.createElementWithClass("div", "priority");
  priority.classList.add(task.priority);
  const contentWrapper = create.createElementWithClass(
    "div",
    "content-wrapper"
  );
  const checkboxDiv = create.createElementWithClass("div", "checkbox-div");
  const checkbox = create.createElementWithClass("input", "checkbox");
  const info = create.createElementWithClass("div", "info"); // modified to suit the class of the task in the HTML
  const title = create.createElementWithClass("p", "task-title");
  title.textContent = task.title;
  const project = create.createElementWithClass("p", "project-title"); //modified
  project.textContent = task.project;
  const dueDate = create.createElementWithClass("p", "due-date");
  dueDate.textContent = task.dueDate;
  const actions = create.createElementWithClass("div", "task-actions");
  const editTaskBtn = create.createElementWithClass("button", "edit-task");
  const editIcon = create.createElementWithClass(
    "i",
    "fa-regular",
    "fa-pen-to-square"
  );
  const removeTaskBtn = create.createElementWithClass("button", "remove-task");
  const remvoeIcon = create.createElementWithClass(
    "i",
    "fa-regular",
    "fa-square-minus"
  );
  cardDiv.dataset.index = task.id;
  checkbox.type = "checkbox";
  checkbox.checked = task.isDone;
  checkbox.addEventListener("click", () => {
    check(checkbox, task.id);
  });
  checkbox.checked = task.isDone;

  contentWrapper.addEventListener("click", () => {
    expandTask(task.id);
  });

  info.addEventListener("click", () => {
    expandTask(task.id);
  });

  priority.addEventListener("click", () => {
    expandTask(task.id);
  });

  removeTaskBtn.addEventListener('click' , () => {
    removeTask(task.id);
  })

  removeTaskBtn.appendChild(remvoeIcon);
  editTaskBtn.appendChild(editIcon);
  actions.append(removeTaskBtn, editTaskBtn);
  info.append(title, project);
  contentWrapper.append(info, dueDate);
  checkboxDiv.appendChild(checkbox);
  cardDiv.append(priority, checkboxDiv, contentWrapper, actions);

  return cardDiv;
}

// Layout:

//  div.task-card
//  ^ div.priority.low
//  ^ div.checkbox-div
//      ^ input.checkbox
//  ^ div.contentWrapper-contentWrapper
//      ^ div.info
//          ^ p.task-title
//          ^ p.task-project
//      ^ p.due-date
//  ^ div.actions
//      ^ button.edit-task
//          ^ i.fa-regular.fa-pen-to-square
//      ^ button.remove-task
