import { checkDinamically } from "../../controllers/taskActions";
import tasks from "../../storage/taskStorage";
import create from "../../others/domCreate";
import { updateCurrentExpanded } from "../modal-form/displayOptions";
import { removeAllExpanded } from "./expandCommun";

export function expandTask(index) {
  const fullView = document.querySelector("#full-view");
  let tasksArr = tasks.getAllTasks();

  for (let i = 0; i < tasksArr.length; i++) {
    if (i === parseInt(index)) {
      removeAllExpanded();
      updateCurrentExpanded(i);
      const fullTask = create.createElementWithID("div", "full-task-div");
      const closeBtn = create.createElementWithID("div", "close");
      const closeIcon = create.createElementWithClass(
        "i",
        "fa-solid",
        "fa-xmark"
      );
      const task = create.createElementWithID("div", "task-full");
      const taskInfo = create.createElementWithID("div", "task-full-info");
      const title = create.createElementWithID("p", "title-full");
      title.textContent = tasksArr[i].title;
      const priority = create.createElementWithClass(
        "div",
        "fa-solid",
        "fa-circle",
        `${tasksArr[i].priority}`
      );
      const status = create.createElementWithID("div", "task-full-status");
      const taskProject = create.createElementWithID("p", "task-full-project");
      taskProject.textContent = tasksArr[i].project;
      const point1 = create.createElementWithClass("span", "point");
      const point2 = create.createElementWithClass("span", "point");
      point1.textContent = "•";
      point2.textContent = "•";
      const dueDate = create.createElementWithID("p", "task-full-date");
      dueDate.textContent = tasksArr[i].dueDate;
      const checkbox = create.createElementWithClass("input", "checkbox");
      checkbox.type = "checkbox";
      const pre = create.createElementWithID("pre", "task-full-notes");
      const notes = create.createTextElement("p", tasksArr[i].notes);
      const line = create.createElementWithClass("div", "line");
      task.dataset.expanded = index;

      checkbox.addEventListener("click", () => {
        checkDinamically(checkbox, index);
      });

      closeBtn.addEventListener("click", () => {
        removeAllExpanded(true);
      });

      if (tasksArr[i].isDone) {
        checkbox.checked = true;
      }

      if (taskProject.textContent !== "") {
        status.append(taskProject, point1);
      }

      if (dueDate.textContent !== "") {
        status.append(dueDate, point2);
      }

      /*       taskInfo.append(title , priority)
      status.append(taskProject , point1 , dueDate , point2, checkbox);
      pre.append(notes);
      task.append(taskInfo , status , pre);
      fullTask.append(task)
      fullView.append(fullTask) */

      closeBtn.append(closeIcon);
      pre.append(notes);
      status.append(checkbox);
      taskInfo.append(title, priority);
      task.append(closeBtn, taskInfo, status, pre);
      fullTask.append(task, line);
      fullView.append(fullTask);
    }
  }
}
