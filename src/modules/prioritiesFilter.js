import { changeTabLabelTo , lastTab } from "./tab";


let filter = false;

export default function loadFilter(){
    const highPriorBtn = document.querySelector('#high');
    const midPriorBtn = document.querySelector('#medium');
    const lowPriorBtn = document.querySelector('#low');
    highPriorBtn.addEventListener('click' , () => filterPriority(highPriorBtn.id));
    midPriorBtn.addEventListener('click' , () => filterPriority(midPriorBtn.id));
    lowPriorBtn.addEventListener('click' , () => filterPriority(lowPriorBtn.id));
}

function filterPriority(priority){
    let formated = priority.charAt(0).toUpperCase() + priority.slice(1);

    if(filter !== priority){
        filter = priority;
        applyFilter(priority);
        changeTabLabelTo(`${formated} Priority`);
    }else{
        filter = null;
        removeFilter();
        changeTabLabelTo(lastTab);
    }
}

function applyFilter(priority){
    const allCards = document.querySelectorAll('.task-card');
    allCards.forEach((card) => {
        if(!card.firstElementChild.classList.value.includes(`${priority}`)){
            card.classList.add("hide");
        }else{
            card.classList.remove("hide");
        }
    })
}

function removeFilter(){
    const allCards = document.querySelectorAll('.task-card');
    allCards.forEach((card) => {
        card.classList.remove("hide");
    })
}