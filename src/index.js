import "./css/style.css";
import { Task } from './models/tasks.js';
import { Project } from './models/projects.js';
import { updateIds , linkTasksToProjects } from "./controllers/controller.js";
/* import loadModals from './views/modals/displayOptions.js'; */

const task = new Task('UM', 'Projeto', '01/01/2024', 'low', 'Lorem ipsum notes');
const task2 = new Task('DOIS', 'Projeto', '01/01/2024', 'low', 'Lorem ipsum notes');
const proj = new Project('Projeto', 'linkprojeto.com', 'Descrição do projeto');


/* updateIds(proj.tasks);
linkTasksToProjects();
console.log(task)
console.log(task2)
console.log(proj)
console.log(proj.getAllProjects())
console.log(proj.tasks) */