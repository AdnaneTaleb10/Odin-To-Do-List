import create from "./domCreate.js";
import { tasksArr , setDatasetIndex } from "../index.js";
import { filterPriority } from "./priorities.js";
import { priority } from "./priorities.js";

    // Card
    // | Priority
    // | Wrapper
    // | | Checkbox
    // | | Info
    // | | | Title
    // | | | Project
    // | | Date and Actions
    // | | | Due date
    // | | | Edit task btn
    // | | | Remove task button

class Task {
    constructor(title, project, priority, dueDate, description) {
        this.title = title;
        this.project = project;
        this.priority = priority.toLowerCase();
        this.dueDate = dueDate;
        this.description = description;
        this.done = false;
    }
}

function newTaskCard(task){
    const minView = document.querySelector("#min-view");

    const card = create.createElementWithClass("div" , "task-card" , "card");

    const priority = create.createElementWithClass("div" , "priority" , `${task.priority}`);

    const wrapper = create.createElementWithClass("div" , "wrapper");

    const checkbox = create.createElementWithClass('input' , 'checkbox');
    checkbox.type = 'checkbox';
    wrapper.appendChild(checkbox);

    const info = create.createElementWithClass("div" , "info");

    const title = create.createTextElement("p" , `${task.title}`);
    title.classList.add("title");

    const project = create.createTextElement("p" , `${task.project}`);
    project.classList.add("project");

    info.appendChild(title);
    info.appendChild(project);

    wrapper.appendChild(info);

    const dateAndActions = create.createElementWithClass("div" , "date-and-actions");

    const dueDate = create.createTextElement("p" , `${task.dueDate}`);
    dueDate.classList.add("due-date");

    const editBtn = create.createElementWithClass('button' , 'fa-regular', 'fa-pen-to-square', 'actions' , 'edit');
    const removeBtn = create.createElementWithClass('button' , 'fa-regular', 'fa-square-minus', 'actions' , 'delete');

    checkbox.onclick = function() {
        const parentCard = checkbox.parentElement.parentElement;
        if(checkbox.checked) {
            parentCard.style.opacity = '40%';
            tasksArr[parentCard.dataset.index].done = 'true';
            console.log(tasksArr[parentCard.dataset.index].done)
        } else {
            parentCard.style.opacity = '100%';
            tasksArr[parentCard.dataset.index].done = 'false';
            console.log(tasksArr[parentCard.dataset.index].done)
        };
    };

    removeBtn.addEventListener('click' , () => {
        removeTask(removeBtn);
    } 
);

    dateAndActions.appendChild(dueDate);
    dateAndActions.appendChild(editBtn);
    dateAndActions.appendChild(removeBtn);

    wrapper.appendChild(dateAndActions);

    card.append(priority , wrapper);
    minView.appendChild(card)
}



function removeTask(btn){
    const btnCard = btn.parentElement.parentElement.parentElement;
    tasksArr.splice(btnCard.dataset.index, 1);
    btnCard.remove();
    filterPriority();
/*     clearTask()   //This will just delete the card from the dom, not from the array of tasks
    displayTask(); //display the array after deleting all cards from the DOM */
}


function clearTask() {
    const allCards = document.querySelectorAll('.task-card');
    allCards.forEach(card => {
        card.remove();
    });
};

function pushTask(task){
    tasksArr.push(task);
    filterPriority();
}

function displayTask() {
    for(const task of tasksArr) {
        newTaskCard(task);
    };
    setDatasetIndex('task-card');
};

export {Task , newTaskCard , displayTask , pushTask};