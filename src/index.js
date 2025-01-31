import './css/style.css';
import setLogo from './modules/logo';
import { Task , pushTask } from './modules/taskControls';
import { Project , pushProject } from './modules/projectControls';
import { loadHome, loadProjects } from './modules/tab';
import loadModals from './modules/modals';
import loadFilter from './modules/prioritiesFilter';

let tasksArr = [];
let projectsArr = [];

 pushTask(new Task("Header", 'Restaurant Page', 'high', '24-06-2024', 'Header components: Logo, dark/light mode theme icon, and login button'));
 pushTask(new Task('Nav', 'Dashboard', 'medium', '13-10-2024', 'nav icons'));
 pushTask(new Task('Main', 'Library', 'low', '10-10-2050', 'libros'));

 pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
 pushProject(new Project('Outro projeto', '', 'Ah sei lá n sei oq'));

 function clearCards(){
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((element) => {
        element.remove();
    })
}

function setDatasetIndex() {
    let index = 0;
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        element.dataset.index = index;
        index++;
    });
}

setLogo();

window.onload = loadModals() , loadHome() , loadProjects() , loadFilter();

export { tasksArr, projectsArr, clearCards, setDatasetIndex };