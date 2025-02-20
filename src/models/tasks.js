import { updateIds } from "../controllers/general";
import { projects } from "./projects";

let tasks = [];

class Task {
  constructor(title, project, priority, dueDate, notes) {
    this.title = title;
    this.project = project;
    this.priority = priority.toLowerCase();
    this.dueDate = dueDate;
    this.notes = notes;
    this.isDone = false;
    this.id = null;
    /* this.projId = null; */

    tasks.push(this);
    updateIds(tasks);
  }

  delete() {
    tasks.splice(this.id, 1);
    console.log(projects);
    updateIds(tasks);
  }

  changeIsDone() {
    this.isDone === true ? (this.isDone = false) : (this.isDone = true);
  }

  getAllTasks() {
    return tasks;
  }

  changeProject(newTitle) {
    this.project = newTitle;
  }

  edit(newTitle, newProject, newPriority, newDueDate, newNotes) {
    newTitle !== "" ? (this.title = newTitle) : this.title;
    this.project = newProject;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.notes = newNotes;
  }
}

function filterTasks(newArr){
  tasks = newArr;
  updateIds(tasks);
}

export { Task, tasks, filterTasks };
