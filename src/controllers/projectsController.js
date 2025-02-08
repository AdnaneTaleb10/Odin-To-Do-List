import { createProj } from "../views/modals/projectForm";
import { clearDisplayed, changeLabelTo } from "./general";
import { projects } from "../models/projects";
import { hide } from "../views/modals/displayOptions";
import newProjectCard from "../models/projectCard";

const minView = document.querySelector("#min-view");

export function displayProjects() {
  for (let proj of projects) {
    minView.appendChild(newProjectCard(proj));
  }
}

export function submitProj(modalToHide, otherModalToHide) {
  createProj();
  clearDisplayed();
  displayProjects();
  changeLabelTo("Projects")
  hide(modalToHide);
  hide(otherModalToHide);
}
