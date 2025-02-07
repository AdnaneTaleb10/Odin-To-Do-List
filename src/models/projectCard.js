import create from "../modules/domCreate";

export default function newProjectCard(project) {
  const cardDiv = create.createElementWithClass("div", "project-card");
  const stripe = create.createElementWithClass("div", "project-stripe");
  const content = create.createElementWithClass("div", "project-wrapper");
  const info = create.createElementWithClass("div", "project-info");
  const title = create.createElementWithClass("p", "project-title");
  title.textContent = project.title;
  const link = create.createTextElement("a", project.link);
  link.href = project.link;
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

  removIcon.appendChild(removeTask);
  editIcon.appendChild(editTask);
  actions.append(removIcon, editIcon);
  info.append(title, link);
  content.append(info, actions);
  cardDiv.append(stripe, content);

  return cardDiv;
}


// Layout:
//  div.project-card
//  ^ div.project-stripe
//  ^ div.project-wrapper
//      ^ div.project-info
//          ^ p.project-title
//          ^ a.project-link
//      ^ div.project-actions
//          ^ button.edit-project
//              ^ i.fa-regular.fa-pen-to-square
//          ^ button.remove-project
//              ^ i.fa-regular.fa-square-minus