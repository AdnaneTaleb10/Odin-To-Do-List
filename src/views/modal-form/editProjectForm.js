import { clearDisplayed } from "../../controllers/general";
import { displayProjects } from "../../controllers/projectsController";
import { projects } from "../../models/projects";
import { Task, tasks } from "../../models/tasks";
import { expandProject } from "../full-view/expandProject";
import { dispalyForm, unhide } from "./displayOptions";
import { hide } from "./displayOptions";

const baseModal = document.querySelector("#modal-option");
const editProjForm = document.querySelector("#edit-project-form");
const editProjBtn = document.querySelector("#edit-project");

let projToEditID;

export function loadEditForm() {
  editProjBtn.addEventListener("click", (e) => {
    e.preventDefault();
    saveChanges(projToEditID);
    /*  hide(editProjForm , baseModal); */
  });
}

export function dispalyProjForm(i) {
  projToEditID = i;
  unhide(baseModal);
  dispalyForm(editProjForm);
  const title = document.querySelector("#edit-project-title");
  const link = document.querySelector("#edit-project-link");
  const description = document.querySelector("#edit-project-description");
  title.value = projects[i].title;
  link.value = projects[i].link;
  description.value = projects[i].description;
}

function saveChanges(projID) {
  const title = document.querySelector("#edit-project-title");
  const link = document.querySelector("#edit-project-link").value;
  const description = document.querySelector("#edit-project-description").value;
  let filter = projects.filter((proj) => proj.title === title.value);

  if (title.value !== "" && (!filter[0] || title.value === projects[projID].title)) {
    updateTaskProject(title.value);
    projects[projID].edit(title.value, link, description);
    clearDisplayed();
    displayProjects();
    updateIfExpanded();
    title.classList.remove("invalid");
  } else {
    alert("Can't have two projects with the same title");
    title.classList.add("invalid");
  }
}

function updateTaskProject(lastTitle, newTitle) {
  for (const task of tasks) {
    if (task.title === lastTitle);
    task.changeProject(newTitle);
  }
}

function updateIfExpanded(dataIndex) {
  const expanded = document.querySelector(`[data-proj-index = '${dataIndex}']`);
  if (expanded !== null) {
    expandProject(dataIndex);
  }
}

loadEditForm();
