import { updateIds } from "../controllers/general";
import { projects } from "./projects";
import tasks from "../storage/taskStorage";

let array = [];

class Task {
  constructor(title, project, priority, dueDate, notes) {
    this.title = title;
    this.project = project;
    this.priority = priority.toLowerCase();
    this.dueDate = dueDate;
    this.notes = notes;
    this.isDone = false;
    /* this.id = null; */
    /* this.projId = null; */

    tasks.storeTask(this);
  }
}

function filterTasks(newArr){
  array = newArr;
  updateIds(array);
}

function sincronize(ew){
  array = ew
}

export { Task, array, filterTasks, sincronize }