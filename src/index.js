import "./css/style.css";
import setLogo from "./modules/logo";
import { Task, tasks } from "./models/tasks.js";
import { Project } from "./models/projects.js";
import { linkTasksToProjects, updateIds } from "./controllers/general.js";
import { displayTasks } from "./controllers/tasksController.js";
import loadTaskForm from "./views/modals/taskForm.js";
import { loadProjForm } from "./views/modals/projectForm.js";
import loadTab from "./views/tab.js";
import { loadEditForm } from "./views/modals/editProjectForm.js";

const task = new Task(
  "UM",
  "portfolio",
  "low",
  "01/01/2024",
  "Lorem ipsum notes"
);
const task2 = new Task(
  "DOIS",
  "Projeto",
  "medium",
  "01/01/2024",
  "Lorem ipsum notes"
);
const task3 = new Task(
  "TRES",
  "Projeto",
  "high",
  "01/01/2024",
  "Lorem ipsum notes"
);

const proj = new Project("Projeto", "linkprojeto.com", "Descrição do projeto");
const proj2 = new Project(
  "Projeto DOIS",
  "linkprojeto.com",
  "Descrição do projeto"
);

(window.onload = linkTasksToProjects()), displayTasks();

/* updateIds(proj.tasks);
linkTasksToProjects();
console.log(task)
console.log(task2)
console.log(proj)
console.log(proj.getAllProjects())
console.log(proj.tasks) */
