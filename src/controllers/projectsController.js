import { createProj } from "../views/modals/projectForm";
import { clearDisplayed, changeLabelTo } from "./general";
import { hide } from "../views/modals/displayOptions";
import newProjectCard from "../models/projectCard";
import newTaskCard from "../models/taskCard";
import { tasks } from "../models/tasks";
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
