import { clearCards } from "..";
import { displayProjects } from "./projectControls";
import { displayTask } from "./taskControls";

const homeBtn = document.querySelector('#home');
const projectsBtn = document.querySelector('#projects');

function loadHome(){
    displayTask();

    homeBtn.addEventListener('click' , () => {
        clearCards();
        changeTabLabelTo('Home');
        displayTask();
    })
}

function loadProjects(){
    projectsBtn.addEventListener('click' , () => {
        clearCards();
        changeTabLabelTo('Projects');
        displayProjects();
    })
}

function changeTabLabelTo(newTab){
    const currentTab = document.querySelector('#current-tab');
    currentTab.textContent = newTab;
}

export{ loadHome , loadProjects , changeTabLabelTo }