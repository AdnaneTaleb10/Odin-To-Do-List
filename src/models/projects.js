import { updateIds } from "../controllers/controller";

let projects = [];

class Project {
  constructor(title, link, description) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.tasks = [];
    this.id = null;

    projects.push(this);
    updateIds(projects);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  delete() {
    projects.splice(this.id, 1);
    updateIds(projects);
  }

  getAllProjects() {
    return projects;
  }

  edit(newTitle, newLink, newDescription) {
    this.title = newTitle;
    this.link = newLink;
    this.description = newDescription;
  }
}

export { Project, projects };
