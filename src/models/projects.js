import storage from "../storage/projectStorage";

let projects = [];

class Project {
  constructor(title, link, description) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.tasks = [];
    this.id = null;

    storage.storeProjects(this)
  }
}

export { Project, projects };
