import { updateIds } from "../controllers/general";

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

    tasks.push(this);
    updateIds(tasks);
  }

  delete() {
    tasks.splice(this.id, 1);
    updateIds(tasks);
  }

  changeIsDone() {
    this.isDone === true ? (this.isDone = false) : (this.isDone = true);
  }

  getAllTasks() {
    return tasks;
  }

  edit(newTitle, newProject, newDueDate, newPriority, newNotes) {
    newTitle !== "" ? (this.title = newTitle) : this.title;
    this.project = newProject;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.notes = newNotes;
  }
}

export { Task, tasks };
