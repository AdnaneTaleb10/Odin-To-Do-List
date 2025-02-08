import { submitProj } from "../../controllers/projectsController";
import { Project } from "../../models/projects";
import { dispalyForm } from "./displayOptions";

const baseModal = document.querySelector("#modal-option");
const createProjBtn = document.querySelector("#create-project");
const projForm = document.querySelector("#project-form");
const submitProjectBtn = document.querySelector("#add-project");

export function loadProjForm() {
  createProjBtn.addEventListener("click", () => {
    dispalyForm(projForm);

    submitProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      submitProj(projForm , baseModal);
    });
  });
}

export function createProj() {
  let title = document.querySelector("#project-title").value;
  let link = document.querySelector("#link").value;
  let description = document.querySelector("#project-description").value;

  new Project(title , link , description);
}

loadProjForm();
