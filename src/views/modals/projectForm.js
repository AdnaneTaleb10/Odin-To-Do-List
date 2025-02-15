import { submitProj } from "../../controllers/projectsController";
import { Project, projects } from "../../models/projects";
import { dispalyForm, hide } from "./displayOptions";

const baseModal = document.querySelector("#modal-option");
const createProjBtn = document.querySelector("#create-project");
const projForm = document.querySelector("#project-form");
const submitProjectBtn = document.querySelector("#add-project");

export function loadProjForm() {
  createProjBtn.addEventListener("click", () => {
    dispalyForm(projForm);

    submitProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const title = document.querySelector("input#project-title");
      let filter = projects.filter((proj) => proj.title === title.value);
      if (!filter[0]) {
        submitProj(projForm, baseModal);
        title.classList.remove("invalid");
      } else {
        title.classList.add("invalid");
      }
    });
  });
}

export function createProj() {
  let title = document.querySelector("#project-title").value;
  let link = document.querySelector("#link").value;
  let description = document.querySelector("#project-description").value;

  new Project(title, link, description);
}

loadProjForm();
