import './css/style.css';
import setLogo from './modules/logo';
import {Task , pushTask , displayTaskCards} from './modules/taskControls';
import { Project , pushProject , displayProjectsCards} from './modules/projectControls';
import { changeTabLabelTo, loadHome, loadProjects } from './modules/tab';
import loadModal from './modules/modals';
import modals from './modules/modals';


let tasksArr = [];
let projectsArr = [];

 pushTask(new Task("Header", 'Restaurant Page', 'High', '24-06-2024', 'Header components: Logo, dark/light mode theme icon, and login button'));
 pushTask(new Task('Nav', 'Dashboard', 'low', '13-10-2024', 'nav icons'));
 pushTask(new Task('Main', 'Library', 'medium', '10-10-2050', 'libros'));
 console.table(tasksArr);

 pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
 pushProject(new Project('Outro projeto', '', 'Ah sei lá n sei oq'));
 console.table(projectsArr);

 function clearCards(){
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((element) => {
        element.remove();
    })
}

function setDatasetIndex(elementClassName) {
    let index = 0;
    const elements = document.querySelectorAll(`.${elementClassName}`);
    elements.forEach(element => {
        element.dataset.index = index;
        index++;
    });
}

setLogo();

/* const homeTab = document.querySelector('#home');
const projectTab = document.querySelector('#projects')

homeTab.addEventListener('click' , () => {
    clearCards();
    changeTabLabelTo('Home')
    displayTaskCards();
});

projectTab.addEventListener('click' , () => {
    clearCards();
    changeTabLabelTo('Projects')
    displayProjectsCards();
}); */

window.onload = modals() , loadHome() , loadProjects();

export { tasksArr, projectsArr, clearCards, setDatasetIndex };