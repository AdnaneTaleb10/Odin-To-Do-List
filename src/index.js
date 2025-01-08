import './style.css';
import setLogo from './modules/logo';
import Project from './modules/newProject';
import {Task , newTaskCard} from './modules/newTask';


let tasks = [];
let projects = [];

//constructor(title, project, priority, dueDate, description)

const header = new Task('Add header', 'To-do List', 'high', '24-06-2024' , 'Header components: Logo, dark/light mode theme icon, and login button');
tasks.push(header);

function displayTasks(arr) {
    for(const task of arr) {
        newTaskCard(task)
    };
};

setLogo();
displayTasks(tasks)