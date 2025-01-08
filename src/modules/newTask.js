import create from "./domCreate";

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
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
        this.done = false;
    }
}

function newTaskCard(task){
    const minView = document.querySelector("#min-view");

    const card = create.createElement("div");
    card.classList.add('task-card');

    const priority = create.createElement("div");
    priority.classList.add("priority");
    priority.classList.add(`${task.priority}`);

    const wrapper = create.createElement("div");
    wrapper.classList.add("wrapper");

    const checkbox = create.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    wrapper.appendChild(checkbox);

    const info = create.createElement("div");
    info.classList.add("info");

    const title = create.createElement("p");
    title.classList.add("title");
    title.textContent =  `${task.title}`

    const project = create.createElement("p");
    project.classList.add("project");
    project.textContent =  `${task.project}`

    info.appendChild(title);
    info.appendChild(project);

    wrapper.appendChild(info);

    const dateAndActions = create.createElement("div");
    dateAndActions.classList.add("date-and-actions");

    const dueDate = create.createElement("p");
    dueDate.classList.add("due-date");
    dueDate.textContent = `${task.dueDate}`;

    const editBtn = create.createElement('button');
    const removeBtn = create.createElement('button');
    editBtn.classList.add('fa-regular', 'fa-pen-to-square', 'actions');
    removeBtn.classList.add('fa-regular', 'fa-square-minus', 'actions');

    dateAndActions.appendChild(dueDate);
    dateAndActions.appendChild(editBtn);
    dateAndActions.appendChild(removeBtn);

    wrapper.appendChild(dateAndActions);

    card.append(priority , wrapper);
    minView.appendChild(card)
}

export {Task , newTaskCard};