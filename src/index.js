import "./css/style.css";
import setLogo from "./others/logo.js";
import tasks from "./storage/taskStorage.js";
import projects from "./storage/projectStorage.js";
import { updateIds } from "./controllers/general.js";
import { loadTaskForm } from "./views/modal-form/taskForm.js";
import { loadProjForm } from "./views/modal-form/projectForm.js";
import loadTab from "./views/tab.js";
import { loadEditForm } from "./views/modal-form/editProjectForm.js";
import { loadFilter } from "./views/prioritiesFilter.js";
import applyTheme from "./views/toggleThemes.js";

loadFilter()
tasks.retrieveTasks();

