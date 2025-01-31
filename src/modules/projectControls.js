import create from "./domCreate";
import { clearCards, projectsArr , setDatasetIndex } from "../index";

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

    // Card
    // ^ stripe
    // ^ wrapper
    //   ^ info
    //     ^ title
    //     ^ link
    //   ^ btnsDiv
    //     ^ editBtn
    //     ^ removeBtn

    const projectCard = create.createElementWithClass("div" , 'project-card' , 'card');

    const stripe = create.createElementWithClass("div" , "project-stripe");
    projectCard.appendChild(stripe);

    const wrapper = create.createElementWithClass("div" , "project-wrapper");
    stripe.appendChild(wrapper);

    const info = create.createElementWithClass("div" , "project-info");

    const title = create.createTextElement("p" , `${project.title}`);
    title.classList.add("project-title");

    const link = create.createTextElement("a" , `${project.link}`);
    link.href = `${project.link}`;

    info.appendChild(title);
    info.appendChild(link);

    wrapper.appendChild(info);

    const actions = create.createElementWithClass("div" , "project-actions");

    const editBtn = create.createElementWithClass('button' , 'fa-regular', 'fa-pen-to-square', 'edit-project');
    const removeBtn = create.createElementWithClass('button' , 'fa-regular', 'fa-square-minus', 'remove-project');
    removeBtn.addEventListener('click' , () => {
        removeProject(removeBtn);
        displayProjects();
    })

    actions.appendChild(editBtn);
    actions.appendChild(removeBtn);

    wrapper.appendChild(actions);
    projectCard.appendChild(wrapper);

    minView.appendChild(projectCard)
}

function removeProject(btn){
    const projCard = btn.parentElement.parentElement.parentElement;
    projectsArr.splice(projCard.dataset.index , 1);
    projCard.remove();
}


function clearProjects() {
    const allCards = document.querySelectorAll('.project-card');
    allCards.forEach(card => {
        card.remove();
    });
};

function pushProject(project){
    projectsArr.push(project);
}

function displayProjects() {
    clearCards();
    for(const proj of projectsArr) {
        newProject(proj);
    };
    setDatasetIndex();
};

export { Project , pushProject , displayProjects , clearProjects };