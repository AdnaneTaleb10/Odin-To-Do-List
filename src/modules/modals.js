import { clearCards } from "..";
import { clearProjects, displayProjects, Project, pushProject } from "./projectControls";
import { changeTabLabelTo } from "./tab";
import { displayTask, newTaskCard, pushTask, Task } from "./taskControls";

const optionsModals = document.querySelector('#modal-option');
const formsModal = document.querySelector('#modal-forms');
const createBtn = document.querySelector('#create');
const createTaskBtn = document.querySelector('#create-task');
const createProjectBtn = document.querySelector('#create-project');
const taskForm = document.querySelector('#task-form');
const projectForm = document.querySelector('#project-form');
const addTask = document.querySelector('#add-task');
const addProject = document.querySelector('#add-project');

function loadModals(){
    addTask.addEventListener('click' , (event) => {
        event.preventDefault();
        submitTask();
    })

    addProject.addEventListener('click' , (event) => {
        event.preventDefault();
        submitProject();
    })

    createBtn.addEventListener('click' , () => {
        optionsModals.style.visibility = 'visible';
        taskForm.style.display = 'none';
        projectForm.style.display = 'none';
        closeModalBehavior(optionsModals);
    })

    createTaskBtn.addEventListener('click' , () => {
        optionsModals.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        taskForm.reset();
        projectForm.style.display = 'none';
        taskForm.style.display = 'block';
        closeModalBehavior(formsModal);
    })

    createProjectBtn.addEventListener('click' , () => {
        optionsModals.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        taskForm.style.display = 'none';
        projectForm.style.display = 'block';
        closeModalBehavior(formsModal);
    })
}

function closeModalBehavior(modal){
    window.onclick = function(event){
        if(event.target === modal){
            modal.style.visibility = 'hidden';
            taskForm.style.display = 'none';
            projectForm.style.display = 'none';
        }
    }
}

 function submitTask() {
    const title = document.querySelector('#task-title');
    const project = document.querySelector('#projects-dropdown');
    const priority = document.querySelector('#task-priority');
    const dueDate = document.querySelector('#due-date');
    const description = document.querySelector('#project-desrcription');

    if(title.value !== ''){
        let task = new Task(title.value , project.value , priority.value , dueDate.value , description.value);
        pushTask(task);
        clearCards()
        displayTask();
        changeTabLabelTo("Home");

        formsModal.style.visibility = 'hidden';
        taskForm.style.display = 'none';
        title.style.border = '2px solid var(--borders-gray)';
    }else{
        title.style.border = '2px solid var(--red)';
    }
 }

 function submitProject(){
    const title = document.querySelector('#project-title');
    const link = document.querySelector('#link');
    const description = document.querySelector('#project-description');

    if(title.value !== ''){
        let project = new Project(title.value , link.value , description.value);
        pushProject(project);
        clearProjects();
        displayProjects();
        changeTabLabelTo("Projects")
        formsModal.style.visibility = 'hidden';
        projectForm.style.display = 'none';

        title.style.border = '2px solid var(--borders-gray)';
    }else{
        title.style.border = '2px solid var(--red)';
    }
 }

export default loadModals;