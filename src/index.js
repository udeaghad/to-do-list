import _ from 'lodash';
import './style.css';
import {showAddItem} from "./modules/enterValue.js";
import {iconHover} from "./modules/iconHover.js" 
import { checkedBoxItem } from './modules/checkedBox.js';
import { taskList } from "./modules/enterValue.js";


const container = document.querySelector('.to-do-cont');

class Task {
    constructor(descr, completed, index = 0){
        this.descr = descr;
        this.completed = completed;
        this.index = index;
    }
}
const inputAdd = document.querySelector('#to-do-input');


    
 let index = 1; 
 
 const enterValue = () => {
    
  const addTask = new Task(inputAdd.value, false, index);
  const {descr, completed, index: indexVal}= addTask;
  taskList.push(addTask)
 index++
 
  localStorage.setItem("taskList", JSON.stringify(taskList))

  showAddItem(descr,completed,indexVal);

}
 
 
import {showStorage} from "./modules/showStorage.js"
showStorage();

inputAdd.addEventListener('keypress', (e) => {
   
    if (e.key ==="Enter"){
        e.preventDefault();
    
    enterValue();
    
     inputAdd.value = null;
    
    }   
    
    
})  



