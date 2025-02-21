import { PAQ } from "../models/projects";
import projects from "../storage/projectStorage";
import tasks from "../storage/taskStorage";
import { TASKAQ, filterTasks } from "../models/tasks";
import { removeAllExpanded } from "../views/full-view/expandCommun";
import { clearDisplayed } from "./general";
import { displayProjects } from "./projectsController";

function removeProjectDinamically(index) {
  const storedProjects = projects.getAllProjects();
  const storedTasks = tasks.getAllTasks();
  const projInMinView = document.querySelector(`[data-proj-id = "${index}"]`);
  const projInFullView = document.querySelector(
    `[data-proj-index = "${index}"]`
  );
  // These are the tasks that are going to be removed with the project
  let tasksRemoved = storedTasks.filter(
    (task) => task.project === storedProjects[index].title
  );
  // Checking if one of the tasks to be removed are expanded
  let taskExpanded = document.querySelector("#task-full");

  for (let task of tasksRemoved) {
    if (taskExpanded !== null) {
      if (task.id === Number(taskExpanded.dataset.expanded)) {
        removeAllExpanded(true);
      }
    }
  }

  // This is the tasks array without the projects that are going to be removed with the project
  let survivingTasks = storedTasks.filter(
    (task) => task.project !== storedProjects[index].title
  );
  projects.removeProject(index);
  tasks.updateTasks(survivingTasks);

  if (projInMinView !== null) {
    clearDisplayed();
    displayProjects();
  }

  if (projInFullView !== null) {
    removeAllExpanded(true);
  }
}

export { removeProjectDinamically };
