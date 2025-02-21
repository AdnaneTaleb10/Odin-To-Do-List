import { displayTasksOfProjects } from "../../controllers/tasksController";
import { projects } from "../../models/projects";
import create from "../../others/domCreate";
import { updateCurrentExpanded } from "../modal-form/displayOptions";
import { removeAllExpanded } from "./expandCommun";

export function expandProject(index) {
  const fullView = document.querySelector("#full-view");
  let projectsArr = projects.getAllProjects();

  for (let i = 0; i < projectsArr.length; i++) {
    if (i === parseInt(index)) {
      removeAllExpanded();
      updateCurrentExpanded(i);
      const fullProject = create.createElementWithID("div", "full-project-div");
      const closeBtn = create.createElementWithID("div", "close");
      const closeIcon = create.createElementWithClass(
        "i",
        "fa-solid",
        "fa-xmark"
      );
      const project = create.createElementWithID("div", "full-project");
      const projectInfo = create.createElementWithID(
        "div",
        "full-project-info"
      );
      const title = create.createElementWithID("h1", "full-project-title");
      title.textContent = projectsArr[i].title;
      const link = create.createElementWithID("p", "full-project-link");
      link.textContent = projectsArr[i].link;
      link.href = projectsArr[i].link;
      const pre = create.createElementWithID("pre", "full-project-description");
      const description = create.createTextElement(
        "p",
        projectsArr[i].description
      );
      const line = create.createElementWithClass("div", "line");

      closeBtn.addEventListener("click", () => {
        removeAllExpanded(true);
      });
      project.dataset.projIndex = i;

      closeBtn.append(closeIcon);
      pre.append(description);
      projectInfo.append(title, link);
      project.append(closeBtn, projectInfo, pre);
      fullProject.append(project, line);
      fullView.append(fullProject);
      displayTasksOfProjects(projectsArr[i]);
    }
  }
}
