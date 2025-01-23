import './css/style.css';
import setLogo from './modules/logo';
import {Task , newTaskCard} from './modules/taskControls';
import { Project , newProject } from './modules/projectControls';


let tasksArr = [];
let projectsArr = [];

/* pushTask(new Task("Header", 'Restaurant Page', '24-06-2024', 'High', 'Header components: Logo, dark/light mode theme icon, and login button'));
pushTask(new Task('Nav', 'Dashboard', '13-10-2024', 'low', 'nav icons'));
pushTask(new Task('Main', 'Library', '10-10-2050', 'medium', 'libros')); */
console.table(tasksArr);

pushProject(new Project("Portfolio" , "myportfolio.com" , "website to showcase my personal projects"));
console.table(projectsArr)

function pushTask(task) {
    tasksArr.push(task)
};
function pushProject(project) {
    projectsArr.push(project)
};

function displayProjects(){
    for(const project of projectsArr){
        newProject(project)
        console.log("heeeeelloowwww")
    }
}

function displayCards() {
    for(const task of tasksArr) {
        newTaskCard(task)
    }

    setDatasetIndex();
};

function setDatasetIndex() {
    let index = 0;
    const cards = document.querySelectorAll('.task-card');
    cards.forEach(card => {
        card.dataset.index = index;
        index++;
    });
};

setLogo();
displayProjects();

export { tasksArr, projectsArr, displayCards , displayProjects };