import { newTaskCard , displayTask } from "./taskControls";
import { clearCards, tasksArr } from "..";
import { changeTabLabelTo } from "./tab.js";

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

function filterPriority(){
    priority.low = [];
    priority.medium = [];
    priority.high = [];

    for(let i = 0 ; i < tasksArr.length ; i++){
        let taskPrior = tasksArr[i].priority;
        priority[`${taskPrior}`].push(tasksArr[i]);
    }
}

const lowPriorBtn = document.querySelector('#low');
lowPriorBtn.addEventListener('click' , () => labelFilteredPrior(lowPriorBtn))

const midPriorBtn = document.querySelector('#medium');
midPriorBtn.addEventListener('click' , () => labelFilteredPrior(midPriorBtn))

const highPriorBtn = document.querySelector('#high');
highPriorBtn.addEventListener('click' , () => labelFilteredPrior(highPriorBtn))

function labelFilteredPrior(btn){
    const formated = btn.id.charAt(0).toUpperCase() + btn.id.slice(1);
    if(priority.filtred !== btn.id){
        priority.filtred = btn.id;
        clearCards();
        changeTabLabelTo(`${formated} Priority`);
        priority.displayByPrior(btn.id)
    }else{
        priority.filtred = null;
        clearCards();
        changeTabLabelTo('Home');
        displayTask()
    }
}

export {priority , filterPriority}