import { linkTasksToProjects } from "../controllers/general";
import { removeProjectDinamically } from "../controllers/projectActions";
import create from "../others/domCreate";
import { expandProject } from "../views/full-view/expandProject";
import { dispalyForm } from "../views/modals/displayOptions";
import { dispalyProjForm } from "../views/modals/editProjectForm";

export default function newProjectCard(project) {
  const cardDiv = create.createElementWithClass("div", "project-card");
  const stripe = create.createElementWithClass("div", "project-stripe");
  const content = create.createElementWithClass("div", "project-wrapper");
  const info = create.createElementWithClass("div", "project-info");
  const title = create.createElementWithClass("p", "project-title");
  title.textContent = project.title;
  const link = create.createTextElement("a", project.link);
  const actions = create.createElementWithClass("div", "project-actions");
  const editProjectBtn = create.createElementWithClass("button", "edit-project");
  const editIcon = create.createElementWithClass(
    "i",
    "fa-regular",
    "fa-pen-to-square"
  );
  const removeProjectBtn = create.createElementWithClass(
    "button",
    "remove-project"
  );
  const removeIcon = create.createElementWithClass(
    "i",
    "fa-regular",
    "fa-square-minus"
  );

  link.href = project.link;
  cardDiv.dataset.projId = project.id;

  info.addEventListener("click", () => {
    expandProject(project.id);
  });

  stripe.addEventListener("click", () => {
    expandProject(project.id);
  });

  removeProjectBtn.addEventListener("click", () => {
    removeProjectDinamically(project.id);
  });

  editProjectBtn.addEventListener("click", () => {
    dispalyProjForm(project.id)
  });

  removeProjectBtn.appendChild(removeIcon);
  editProjectBtn.append(editIcon)
  actions.append(editProjectBtn, removeProjectBtn);
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
