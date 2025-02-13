import { check } from "../../controllers/tasksController";
import { tasks } from "../../models/tasks";
import create from "../../others/domCreate";
import { updateCurrentExpanded } from "../modals/displayOptions";
import { removeAllExpanded } from "./expandCommun";

export function expandTask(index) {
  const fullView = document.querySelector("#full-view");

  for (let i = 0; i < tasks.length; i++) {
    if (i === parseInt(index)) {
      removeAllExpanded();
      updateCurrentExpanded(i);
      const fullTask = create.createElementWithID("div", "full-task-div");
      const task = create.createElementWithID("div", "task-full");
      const taskInfo = create.createElementWithID("div", "task-full-info");
      const title = create.createElementWithID("p", "title-full");
      title.textContent = tasks[i].title;
      const priority = create.createElementWithClass(
        "div",
        "fa-solid",
        "fa-circle",
        `${tasks[i].priority}`
      );
      const status = create.createElementWithID("div", "task-full-status");
      const taskProject = create.createElementWithID("p", "task-full-project");
      taskProject.textContent = tasks[i].project;
      const point1 = create.createElementWithClass("span", "point");
      const point2 = create.createElementWithClass("span", "point");
      point1.textContent = "•";
      point2.textContent = "•";
      const dueDate = create.createElementWithID("p", "task-full-date");
      dueDate.textContent = tasks[i].dueDate;
      const checkbox = create.createElementWithClass("input", "checkbox");
      checkbox.type = "checkbox";
      const pre = create.createElementWithID("pre", "task-full-notes");
      const notes = create.createTextElement("p", tasks[i].notes);
      const line = create.createElementWithClass("div", "line");
      fullTask.dataset.expanded = index;
      checkbox.addEventListener("click", () => {
        check(checkbox, index);
      });
      if (tasks[i].isDone) {
        checkbox.checked = true;
      }

      /*       taskInfo.append(title , priority)
      status.append(taskProject , point1 , dueDate , point2, checkbox);
      pre.append(notes);
      task.append(taskInfo , status , pre);
      fullTask.append(task)
      fullView.append(fullTask) */

      pre.append(notes);
      status.append(taskProject, point1, dueDate, point2, checkbox);
      taskInfo.append(title, priority);
      task.append(taskInfo, status, pre);
      fullTask.append(task, line);
      fullView.append(fullTask);
    }
  }
}
