import { tasksArr } from "..";
import create from "./domCreate";

export default function expandTask(index) {
  const fullView = document.querySelector("#full-view");

  for (let i = 0; i < tasksArr.length; i++) {
    if (i === parseInt(index)) {
      removeExpandedTask();
      const point1 = create.createElementWithClass("span", "point");
      const point2 = create.createElementWithClass("span", "point");
      point1.textContent = "•";
      point2.textContent = "•";

      const taskFull = create.createElementWithID("div", "task-full");

      const info = create.createElementWithID("div", "task-full-info");
      const title = create.createElementWithID("div", "title-full");
      title.textContent = tasksArr[i].title;

      const priority = create.createElementWithClass(
        "div",
        tasksArr[i].priority
      );
      priority.classList.add("fa-solid", "fa-circle");

      const status = create.createElementWithID("div", "task-full-status");
      const taskProject = create.createElementWithID("p", "task-full-project");
      taskProject.textContent = tasksArr[i].project;

      const dueDate = create.createElementWithID("p", "task-full-date");
      dueDate.textContent = tasksArr[i].dueDate;

      const checkbox = create.createElementWithClass("input", "checkbox");
      checkbox.type = "checkbox";

      const notes = create.createElementWithID("p", "task-full-notes");
      notes.textContent = tasksArr[i].description;

      const line = create.createElementWithClass("div", "line");

      if (taskProject.textContent !== "") {
        status.append(taskProject, point1);
      }

      if (dueDate.textContent !== "") {
        status.append(dueDate, point2);
      }
      status.append(checkbox);
      info.append(title, priority);

      taskFull.append(info, status, notes);
      fullView.append(taskFull, line);
    } else {
      console.log(tasksArr[i]);
    }
  }
}

function removeExpandedTask() {
  const fullView = document.querySelector("#full-view");

  do {
    fullView.firstChild.remove();
  } while (fullView.firstElementChild);
}
