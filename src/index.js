import './css/style.css';
import setLogo from './modules/logo';
import { Task , pushTask } from './modules/taskControls';
import { Project , pushProject } from './modules/projectControls';
import { loadHome, loadProjects } from './modules/tab';
import loadModals from './modules/modals';
import loadFilter from './modules/prioritiesFilter';

let tasksArr = [];
let projectsArr = [];

 pushTask(new Task("Header", 'Restaurant Page', 'High', '24-06-2024', 'Header components: Logo, dark/light mode theme icon, and login button'));
 pushTask(new Task('Nav', 'Dashboard', 'high', '13-10-2024', 'nav icons'));
 pushTask(new Task('Main', 'Library', 'medium', '10-10-2050', 'libros'));

 pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
 pushProject(new Project('Outro projeto', '', 'Ah sei lá n sei oq'));

 function clearCards(){
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((element) => {
        element.remove();
    })
}

// const hide = (function(){
//     function hideCards(){
//         const cards = document.querySelectorAll('.task-card');
//         cards.forEach(card => {
//             card.classList.add('hide');
//         });
//     };
//     function hideProjects(){
//         const projs = document.querySelectorAll('.project-card');
//         projs.forEach(proj => {
//             proj.classList.add('hide');
//         });
//     };
// })();

function setDatasetIndex(elementClassName) {
    let index = 0;
    const elements = document.querySelectorAll(`.${elementClassName}`);
    elements.forEach(element => {
        element.dataset.index = index;
        index++;
    });
}

setLogo();

window.onload = loadModals() , loadHome() , loadProjects() , loadFilter();

export { tasksArr, projectsArr, clearCards, setDatasetIndex };