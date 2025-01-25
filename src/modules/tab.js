import { clearCards } from "..";
import { displayProjectsCards } from "./projectControls";
import { displayTaskCards } from "./taskControls";

const homeBtn = document.querySelector('#home');
const projectsBtn = document.querySelector('#projects');

function loadHome(){
    homeBtn.addEventListener('click' , () => {
        clearCards();
        changeTabLabelTo('Home');
        displayTaskCards();
    })

    displayTaskCards();
}

function loadProjects(){
    projectsBtn.addEventListener('click' , () => {
        clearCards();
        changeTabLabelTo('Projects');
        displayProjectsCards();
    })
}

function changeTabLabelTo(newTab){
    const currentTab = document.querySelector('#current-tab');
    currentTab.textContent = newTab;
}

export{ loadHome , loadProjects , changeTabLabelTo }

