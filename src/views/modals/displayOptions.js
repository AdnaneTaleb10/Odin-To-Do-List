let currentExpanded = null;
const buttonToCreate = document.querySelector("#create");
const baseModal = document.querySelector("#modal-option");
const optionToCreate = document.querySelector("#create-option");
const createTaskBtn = document.querySelector("#create-task");
const createProjBtn = document.querySelector("#create-project");

buttonToCreate.addEventListener("click", () => {
  unhide(baseModal, optionToCreate, createTaskBtn, createProjBtn);
  closeModalBheavior(baseModal);
});

function hide(...elements) {
  for (let element of elements) {
    element.classList.remove("display");
    element.classList.add("hide");
  }
}

function unhide(...elements) {
  for (let element of elements) {
    element.classList.remove("hide");
    element.classList.add("display");
  }
}

function dispalyForm(form) {
  form.reset();
  hide(optionToCreate, createTaskBtn, createProjBtn);
  unhide(form);
  closeModalBheavior(baseModal);
}

function closeModalBheavior(modal) {
  const taskFrom = document.querySelector("#task-form");
  const projFrom = document.querySelector("#project-form");
  const editProjForm = document.querySelector("#edit-project-form");

  window.onclick = function (event) {
    if (event.target === modal) {
      hide(
        optionToCreate,
        createTaskBtn,
        createProjBtn,
        modal,
        taskFrom,
        projFrom,
        editProjForm
      );
    }
  };
}

function updateCurrentExpanded(arg) {
  currentExpanded = arg;
}

function getCurrentExpanded() {
  return currentExpanded;
}

export { dispalyForm, unhide, hide, updateCurrentExpanded, getCurrentExpanded };
