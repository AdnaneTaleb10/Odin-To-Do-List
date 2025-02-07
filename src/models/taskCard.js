import create from "../modules/domCreate";

export default function newTaskCard(task) {
  const cardDiv = create.createElementWithClass("div", "task-card");
  const priority = create.createElementWithClass("div", "priority");
  priority.classList.add(task.priority);
  const content = create.createElementWithClass("div", "content-wrapper");
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
  const editIcon = create.createElementWithClass("button", "edit-task");
  const editTask = create.createElementWithClass(
    "i",
    "fa-regular",
    "fa-pen-to-square"
  );
  const removIcon = create.createElementWithClass("button", "remove-task");
  const removeTask = create.createElementWithClass(
    "i",
    "fa-regular",
    "fa-square-minus"
  );
  checkbox.type = "checkbox";

  removIcon.appendChild(removeTask);
  editIcon.appendChild(editTask);
  actions.append(removIcon, editIcon);
  info.append(title, project);
  content.append(info, dueDate);
  checkboxDiv.appendChild(checkbox);
  cardDiv.append(priority, checkboxDiv, content, actions);

  return cardDiv;
}

// Layout:
//  div.task-card
//  ^ div.priority.low
//  ^ div.checkbox-div
//      ^ input.checkbox
//  ^ div.content-content
//      ^ div.info
//          ^ p.task-title
//          ^ p.task-project
//      ^ p.due-date
//  ^ div.actions
//      ^ button.edit-task
//          ^ i.fa-regular.fa-pen-to-square
//      ^ button.remove-task
//          ^ i.fa-regular.fa-square-minus
