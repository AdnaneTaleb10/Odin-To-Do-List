import { clearDisplayed } from "../../controllers/general";
import { displayProjects } from "../../controllers/projectsController";
import projects from "../../storage/projectStorage";
import { expandProject } from "../full-view/expandProject";
import { dispalyForm, unhide, baseModal } from "./displayOptions";

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
  const storedProjects = projects.getAllProjects();
  projToEditID = i;
  unhide(baseModal);
  dispalyForm(editProjForm);
  const title = document.querySelector("#edit-project-title");
  const link = document.querySelector("#edit-project-link");
  const description = document.querySelector("#edit-project-description");
  title.value = storedProjects[i].title;
  link.value = storedProjects[i].link;
  description.value = storedProjects[i].description;
}

function saveChanges(index) {
  const storedProjects = projects.getAllProjects();
  const title = document.querySelector("#edit-project-title");
  const link = document.querySelector("#edit-project-link").value;
  const description = document.querySelector("#edit-project-description").value;
  let filter = storedProjects.filter((proj) => proj.title === title.value);

  if (
    title.value !== "" &&
    (!filter[0] || title.value === storedProjects[projID].title)
  ) {
    updateTaskProject(title.value);
    projects.editProjects(index, title.value, link, description);
    clearDisplayed();
    displayProjects();
    updateIfExpanded(index);
    title.classList.remove("invalid");
  } else {
    alert("Can't have two projects with the same title");
    title.classList.add("invalid");
  }
}

function updateIfExpanded(dataIndex) {
  const expanded = document.querySelector(`[data-proj-index = '${dataIndex}']`);
  if (expanded !== null) {
    expandProject(dataIndex);
  }
}

loadEditForm();
