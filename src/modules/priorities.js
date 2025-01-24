import { newTaskCard , displayTaskCards } from "./taskControls";
import { clearCards , changeCurrTabLabel } from "..";

const priority = (function(){
    let filtred = false;
    let low = [];
    let medium = [];
    let high = [];

    function displayByPrior(prior){
        for(const task of priority[`${prior}`]){
            newTaskCard(task);
        }
    }

    return{filtred , low , medium , high , displayByPrior};
})();

function filterPriority(task){
    let prior = task.priority;
    priority[`${prior}`].push(task);
    console.log(priority.high);
    console.log(priority.medium);
    console.log(priority.low);
}

const lowPriorBtn = document.querySelector('#low');
lowPriorBtn.addEventListener('click' , () => {
    if(priority.filtred !== 'low'){
        priority.filtred = 'low';
        clearCards();
        changeCurrTabLabel('Low Priority');
        priority.displayByPrior('low');
    }else{
        priority.filtred = null;
        clearCards();
        changeCurrTabLabel('Home');
        displayTaskCards();
    }
})

const midPriorBtn = document.querySelector('#medium');
midPriorBtn.addEventListener('click' , () => {
    if(priority.filtred !== 'medium'){
        priority.filtred = 'medium';
        clearCards()
        changeCurrTabLabel('Medium Priority');
        priority.displayByPrior('medium');
    }else{
        priority.filtred = null;
        clearCards();
        changeCurrTabLabel('Home');
        displayTaskCards();
    }
})

const highPriorBtn = document.querySelector('#high');
highPriorBtn.addEventListener('click' , () => {
    if(priority.filtred !== 'high'){
        priority.filtred = 'high';
        clearCards()
        changeCurrTabLabel('High Priority');
        priority.displayByPrior('high');
    }else{
        priority.filtred = null;
        clearCards();
        changeCurrTabLabel('Home');
        displayTaskCards();
    }
})

export {priority , filterPriority}