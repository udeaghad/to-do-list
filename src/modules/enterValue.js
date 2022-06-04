export const taskList = [];



const container = document.querySelector('.to-do-cont');

export class Task {
    constructor(descr, completed, index = 0){
        this.descr = descr;
        this.completed = completed;
        this.index = index;
    }
}
const inputAdd = document.querySelector('#to-do-input');


    
export let index = 1; 
 
 const enterValue = () => {
    
    const addTask = new Task(inputAdd.value, false, index);
    const {descr, completed, index: indexVal}= addTask;
    taskList.push(addTask)
   index++
   
    localStorage.setItem("taskList", JSON.stringify(taskList))
  
    showAddItem(descr,completed,indexVal);

}
import {iconHover} from "./iconHover.js" 

export const showAddItem = (descr, completed, index) => {
    const listContainer = document.createElement('div');
    listContainer.classList.add('list');
    container.appendChild(listContainer)
    const listBox = document.createElement('ul');
    const checkBoxInput =document.createElement('input');
    checkBoxInput.id = "check-box";
    checkBoxInput.classList = "check-box";
    checkBoxInput.type = "checkbox";
   
    iconHover(descr, checkBoxInput, listContainer, listBox, descr)
}