import { createProj } from "../views/modal-form/projectForm";
import { clearDisplayed, changeLabelTo } from "./general";
import { hide } from "../views/modal-form/displayOptions";
import newProjectCard from "../models/projectCard";
import { projects } from "../models/projects";

const minView = document.querySelector("#min-view");
const full = document.querySelector("#full-view");

export function displayProjects() {
  for (let proj of projects) {
    minView.appendChild(newProjectCard(proj));
  }
}

export function submitProj(modalToHide, otherModalToHide) {
  createProj();
  clearDisplayed();
  displayProjects();
  changeLabelTo("Projects");
  hide(modalToHide);
  hide(otherModalToHide);
}
