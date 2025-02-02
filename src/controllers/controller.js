import { projects } from "../models/projects";
import { tasks } from "../models/tasks";

export function updateIds(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i;
  }
}

export function linkTasksToProjects() {
  for (let task of tasks) {
    for (let project of projects) {
      if (task.project === project.title) {
        project.addTask(task);
      }
    }
  }
}
