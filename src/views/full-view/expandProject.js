import { displayTasksOfProjects } from "../../controllers/tasksController";
import { projects } from "../../models/projects";
import create from "../../others/domCreate";
import { updateCurrentExpanded } from "../modals/displayOptions";

export function expandProject(index) {
  const fullView = document.querySelector("#full-view");

  for (let i = 0; i < projects.length; i++) {
    if (i === parseInt(index)) {
      removeAllExpanded();
      updateCurrentExpanded(i);
      const fullProject = create.createElementWithID("div", "full-project-div");
      const project = create.createElementWithID("div", "full-project");
      const projectInfo = create.createElementWithID(
        "div",
        "full-project-info"
      );
      const title = create.createElementWithID("h1", "full-project-title");
      title.textContent = projects[i].title;
      const link = create.createElementWithID("p", "full-project-link");
      link.textContent = projects[i].link;
      link.href = projects[i].link;
      const pre = create.createElementWithID("pre", "full-project-description");
      const description = create.createTextElement(
        "p",
        projects[i].description
      );
      const line = create.createElementWithClass("div", "line");

      pre.append(description);
      projectInfo.append(title, link);
      project.append(projectInfo, pre);
      fullProject.append(project, line);
      fullView.append(fullProject);
      displayTasksOfProjects(projects[i])
    }
  }
}

export function removeAllExpanded() {
  const fullView = document.querySelector("#full-view");

  do {
    fullView.firstElementChild.remove();
  } while (fullView.firstElementChild);
}
