import './css/style.css';
import setLogo from './modules/logo';
import {Task , newTaskCard , pushTask , displayTaskCards} from './modules/taskControls';
import { Project , newProject , pushProject , displayProjectsCards} from './modules/projectControls';


let tasksArr = [];
let projectsArr = [];

 pushTask(new Task("Header", 'Restaurant Page', 'High', '24-06-2024', 'Header components: Logo, dark/light mode theme icon, and login button'));
 pushTask(new Task('Nav', 'Dashboard', 'low', '13-10-2024', 'nav icons'));
 pushTask(new Task('Main', 'Library', 'medium', '10-10-2050', 'libros'));
 console.table(tasksArr);
 displayTaskCards();


 pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
 pushProject(new Project('Outro projeto', '', 'Ah sei lá n sei oq'));
 console.table(projectsArr);
 displayProjectsCards();




function setDatasetIndex(elementClassName) {
    let index = 0;
    const elements = document.querySelectorAll(`.${elementClassName}`);
    elements.forEach(element => {
        element.dataset.index = index;
        index++;
    });
}

setLogo();

export { tasksArr, projectsArr , setDatasetIndex };