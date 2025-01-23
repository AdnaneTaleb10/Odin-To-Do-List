import create from "./domCreate";
import { projectsArr , displayProjects } from "../index";

class Project {
    constructor(title, link , description) {
        this.title = title;
        this.link = link;
        this.description = description;
        this.task = [];
    }
}

function newProject(project){
    const minView = document.querySelector("#min-view");

    const projectCard = create.createElement("div");
    projectCard.classList.add('project-card');

    const stripe = create.createElement("div");
    stripe.classList.add("project-stripe");
    projectCard.appendChild(stripe);

    const wrapper = create.createElement("div");
    wrapper.classList.add("project-wrapper");
    stripe.appendChild(wrapper);

    const info = create.createElement("div");
    info.classList.add("project-info");

    const title = create.createElement("p");
    title.classList.add("project-title");
    title.textContent = `${project.title}`;

    const link = create.createElement("a");
    link.href = `${project.link}`;
    link.textContent = `${project.link}`;

    info.appendChild(title);
    info.appendChild(link);

    wrapper.appendChild(info);

    const actions = create.createElement("div");
    actions.classList.add("project-actions");

    const editBtn = create.createElement('button');
    const removeBtn = create.createElement('button');
    editBtn.classList.add('fa-regular', 'fa-pen-to-square', 'edit-project');
    removeBtn.classList.add('fa-regular', 'fa-square-minus', 'remove-project');

    actions.appendChild(editBtn);
    actions.appendChild(removeBtn);

    wrapper.appendChild(actions);
    projectCard.appendChild(wrapper);

    minView.appendChild(projectCard)
}

export {Project , newProject};