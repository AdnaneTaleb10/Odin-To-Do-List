import { projects } from "../models/projects";
import { removeAllExpanded } from "../views/full-view/expandCommun";
import { clearDisplayed } from "./general";
import { displayProjects } from "./projectsController";

function removeTaskDinamically(index) {
  const projInMinView = document.querySelector(`[data-proj-id = "${index}"]`);
  const projInFullView = document.querySelector(
    `[data-proj-index = "${index}"]`
  );
  projects[index].delete()

  if (projInMinView !== null) {
    clearDisplayed();
    displayProjects();
  }

  if (projInFullView !== null) {
    removeAllExpanded(true);
  }
}

export { removeTaskDinamically };
