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

export default Task;