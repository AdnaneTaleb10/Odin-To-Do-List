import { projects } from "../models/projects";
import { filterTasks, tasks } from "../models/tasks";
import { removeAllExpanded } from "../views/full-view/expandCommun";
import { clearDisplayed, updateIds } from "./general";
import { displayProjects } from "./projectsController";

function removeProjectDinamically(index) {
  const projInMinView = document.querySelector(`[data-proj-id = "${index}"]`);
  const projInFullView = document.querySelector(
    `[data-proj-index = "${index}"]`
  );
  
  let filter = tasks.filter((task) => task.project !== projects[index].title);
  filterTasks(filter);
  updateIds(tasks)

  projects[index].delete();

  if (projInMinView !== null) {
    clearDisplayed();
    displayProjects();
  }

  if (projInFullView !== null) {
    removeAllExpanded(true);
  }
}

export { removeProjectDinamically };
