let currentExpanded = null;
const buttonToCreate = document.querySelector("#create");
const baseModal = document.querySelector("#modal-option");
const optionToCreate = document.querySelector("#create-option");
const createTaskBtn = document.querySelector("#create-task");
const createProjkBtn = document.querySelector("#create-project");


buttonToCreate.addEventListener("click", () => {
  unhide(baseModal, optionToCreate, createTaskBtn, createProjkBtn);
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
  hide(optionToCreate, createTaskBtn, createProjkBtn);
  unhide(form);
  closeModalBheavior(baseModal);
}

function closeModalBheavior(modal) {
  const taskFrom = document.querySelector("#task-form");
  const projFrom = document.querySelector("#project-form");

  window.onclick = function (event) {
    if (event.target === modal) {
      hide(
        optionToCreate,
        createTaskBtn,
        createProjkBtn,
        modal,
        taskFrom,
        projFrom
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

export { dispalyForm, unhide, hide , updateCurrentExpanded , getCurrentExpanded};
