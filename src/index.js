import _, { add } from 'lodash';
import './style.css';

const taskList = [
  {
      descr: "To prepare for microverse trainings",
      completed: true,
      index: 1
  },

  {
      descr: "To attend morning session",
      completed: true,
      index: 2
  },

  {
      descr: "To begin daily project",
      completed: false,
      index: 3
  }
];

const container = document.querySelector('.to-do-cont');

const inputAdd = document.querySelector('#to-do-input');
inputAdd.addEventListener('keypress', (e) => {
 
  if (e.key ==="Enter"){
      e.preventDefault();
  taskList.push({descr: inputAdd.value, completed: false, index: taskList[taskList.length-1].index+1})
    console.log(taskList)
 
 }

})
for (let i = 0; i < taskList.length; i+=1){
  const listContainer = document.createElement('div');
  listContainer.classList.add('list');
  listContainer.innerHTML = `
       <ul>
       <input id="check-box" type="checkbox">
       <li class="list-info">${taskList[i].descr}</li>
       <i class="fa-solid fa-ellipsis-vertical icon"></i>
       </ul>
       `
  container.appendChild(listContainer)
  }

const clearBtn = document.createElement('button');
clearBtn.classList.add('clear-btn');
clearBtn.type = 'button';
clearBtn.innerHTML = 'Clear all completed';
container.appendChild(clearBtn);

const checkBox = document.querySelectorAll('ul input');
const listInfo = document.querySelectorAll('.list-info');
const icon = document.querySelectorAll('.icon');
console.log(checkBox)
console.log(listInfo)
const markedItem = () => {
  for (let i in listInfo){
 if (checkBox[i].checked == true ){
 
 listInfo[i].style.textDecoration = "line-through";
 icon[i].classList = "fa-solid fa-trash icon";

 } else if (checkBox[i].checked == false){
   
     listInfo[i].style.textDecoration = "none";
     icon[i].classList = "fa-solid fa-ellipsis-vertical icon";
 }
 }  

}   


   container.addEventListener('click', markedItem);
