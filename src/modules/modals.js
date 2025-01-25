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
        taskForm.style.visibility = 'visible';
        closeModalBehavior(formsModal);
    })

    createProjectBtn.addEventListener('click' , () => {
        optionsModals.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        projectForm.style.visibility = 'visible';
        closeModalBehavior(formsModal);
    })
}

function closeModalBehavior(modal){
    window.onclick = function(event){
        if(event.target === modal){
            modal.style.visibility = 'hidden';
            taskForm.style.visibility = 'hidden';
            projectForm.style.visibility = 'hidden';
        }
    }
}

export default modals;