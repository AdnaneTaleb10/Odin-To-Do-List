/* import { tasks } from "../models/tasks";
import { projects } from "../models/projects"; */
import tasks from "../storage/taskStorage";
import projects from "../storage/projectStorage";
import { clearDisplayed, clearProjectTasks } from "./general";
import { displayTasks, displayTasksOfProjects } from "./tasksController";
import { removeAllExpanded } from "../views/full-view/expandCommun";


function checkDinamically(checkbox, index) {
  /*   const cardMinimized = document.querySelector(`[data-index = '${index}']`);
    const cardMaximized = document.querySelector(
      `[data-full-index = '${index}']`
    ); */

  const taskInMinView = document.querySelector(`[data-index='${index}']`);
  const taskInProjectExpanded = document.querySelector(
    `[data-full-index='${index}']`
  );
  const taskExpanded = document.querySelector(`[data-expanded='${index}']`);

  tasks[index].changeIsDone();

  // Card exists in:
  // minView AND fullView
  if (taskInMinView !== null && taskExpanded !== null) {
    if (checkbox.checked === true) {
      taskInMinView.children[1].firstChild.checked = true;
      taskExpanded.children[2].lastChild.checked = true;
    } else {
      taskInMinView.children[1].firstChild.checked = false;
      taskExpanded.children[2].lastChild.checked = false;
    }
  }

  // minView AND fullView
  if (taskInMinView !== null && taskInProjectExpanded !== null) {
    if (checkbox.checked === true) {
      taskInMinView.children[1].firstChild.checked = true;
      taskExpanded.children[2].lastChild.checked = true;
    } else {
      taskInMinView.children[1].firstChild.checked = false;
      taskExpanded.children[1].lastChild.checked = false;
    }
  }

  // Only minView
  if (taskInMinView !== null && taskInProjectExpanded === null) {
    if (checkbox.checked === true) {
      taskInMinView.children[1].firstChild.checked = true;
    } else {
      taskInMinView.children[1].firstChild.checked = false;
    }
  }

  // Only fullView
  if (taskInMinView == null && taskInProjectExpanded !== null) {
    if (checkbox.checked === true) {
      taskInProjectExpanded.children[1].firstChild.checked = true;
    } else {
      taskInProjectExpanded.children[1].firstChild.checked = false;
    }
  }
}

function removeTaskDinamically(index) {
  const tasksInMinView = document.querySelector(`[data-index='${index}']`);
  const tasksInProjectEpanded = document.querySelector(
    `[data-full-index = '${index}']`
  );
  const taskExpanded = document.querySelector(`[data-expanded = '${index}']`);
  const projectExpanded = document.querySelector("[data-proj-index]");
  console.log(projectExpanded);
  tasks[index].delete();

  if (tasksInMinView !== null) {
    clearDisplayed();
    displayTasks();
  }

  if (tasksInProjectEpanded !== null) {
    clearProjectTasks();
    displayTasksOfProjects(projects[projectExpanded.dataset.projIndex]);
  }

  if (taskExpanded !== null) {
    removeAllExpanded(true);
  }
}

export { checkDinamically, removeTaskDinamically };
