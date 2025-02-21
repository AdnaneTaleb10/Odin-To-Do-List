/* import { projects } from "../models/projects"; */
import projects from "../storage/projectStorage";
import tasks from "../storage/taskStorage";
import { filterTasks } from "../models/tasks";
import { removeAllExpanded } from "../views/full-view/expandCommun";
import { clearDisplayed } from "./general";
import { displayProjects } from "./projectsController";

function removeProjectDinamically(index) {
  const projInMinView = document.querySelector(`[data-proj-id = "${index}"]`);
  const projInFullView = document.querySelector(
    `[data-proj-index = "${index}"]`
  );

  let taskExpanded = document.querySelector("#task-full");
  let filter = tasks.filter((task) => task.project !== projects[index].title);
  let removed = tasks.filter((task) => task.project !== projects[index].title);

  for (let tsk of removed) {
    if (taskExpanded !== null) {
      if (tsk.id === Number(taskExpanded.dataset.expanded)) {
        removeAllExpanded(true);
      }
    }
  }

  filterTasks(filter);
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
