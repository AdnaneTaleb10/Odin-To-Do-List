const optionsModals = document.querySelector('#modal-option');
const formsModal = document.querySelector('#modal-forms');
const createBtn = document.querySelector('#create');
const createTaskBtn = document.querySelector('#create-task');
const createProjectBtn = document.querySelector('#create-project');
const taskForm = document.querySelector('#task-form');
const projectForm = document.querySelector('#project-form');

function modals(){
    createBtn.addEventListener('click' , () => {
        optionsModals.style.visibility = 'visible';
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

export default modals;