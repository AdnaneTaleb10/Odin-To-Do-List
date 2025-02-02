import { dispalyForm } from "./displayOptions";

const createProjBtn = document.querySelector("#create");
const projForm = document.querySelector("#project-form");
const submitProjectBtn = document.querySelector("#add-project");

export default function loadProjForm() {
  createProjBtn.addEventListener("click", () => {
    hide(projForm);
    dispalyForm(projForm);
  });
}

loadProjForm();
