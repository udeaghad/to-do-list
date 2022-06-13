// import _ from 'lodash';
import './style.css';
import loadFromStorage from './modules/loadstorage.js';

import checkItem from './modules/checkitem.js';

// load data on page refresh
window.addEventListener('load', loadFromStorage);

// Create empty array to take values
let taskList = [];
const inputAdd = document.querySelector('#to-do-input');
const container = document.querySelector('.to-do-cont');

class Task {
  constructor(descr, completed, index = 0) {
    this.descr = descr;
    this.completed = completed;
    this.index = index;
  }
}

// Function to assign numbers to index after every action
const numberIndex = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));

  let newIndex = 1;
  for (let i = 0; i < dataStorage.length; i += 1) {
    dataStorage[i].index = newIndex;
    newIndex += 1;
  }
  localStorage.setItem('taskList', JSON.stringify(dataStorage));
};

let index = 0;

// Function to create items to display and store at local storage
const addItem = () => {
  const addTask = new Task(inputAdd.value, false, index);

  taskList.push(addTask);

  index += 1;

  localStorage.setItem('taskList', JSON.stringify(taskList));

  // To create each element nodes
  const container = document.querySelector('.to-do-cont');
  const listContainer = document.createElement('div');
  listContainer.classList.add('list');
  container.appendChild(listContainer);

  const listItem = document.createElement('ul');
  listItem.classList.add('list-item');

  const checkbox = document.createElement('input');
  checkbox.classList.add('check-box');
  checkbox.type = 'checkbox';

  const listInfo = document.createElement('li');
  listInfo.classList.add('list-info');

  listInfo.innerHTML = inputAdd.value;

  inputAdd.value = '';

  const editIcon = document.createElement('i');
  editIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'icon');

  listContainer.appendChild(listItem);

  listItem.append(checkbox, listInfo, editIcon);
  let editIndex;
  // Create new input node and replace the old node on edit button click

  editIcon.addEventListener('click', () => {
    const editCont = document.createElement('div');
    editCont.classList.add('edit-con');
    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    const editMsg = document.createElement('span');
    editMsg.classList.add('edit-msg');
    editMsg.innerHTML = "Press 'Enter' to save changes";
    editCont.append(editInput, editMsg);
    listItem.replaceChild(editCont, listInfo);
    editInput.value = listInfo.innerHTML;

    const storedData = JSON.parse(localStorage.getItem('taskList'));

    const newData = storedData.filter((arr) => arr.descr !== listInfo.innerHTML);

    taskList = taskList.filter((arr, i) => {
      if (arr.descr === listInfo.innerHTML) {
        editIndex = i;
      }
      return arr.descr !== listInfo.innerHTML;
    });

    localStorage.setItem('taskList', JSON.stringify(newData));

    // Replace input node with another node and also holding the value of the input node
    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        listItem.replaceChild(listInfo, editCont);
        listInfo.innerHTML = editInput.value;
        const storedData = JSON.parse(localStorage.getItem('taskList'));

        const editedTask = new Task(listInfo.innerHTML, false, index);

        storedData.splice(editIndex, 0, editedTask);

        taskList.splice(editIndex, 0, editedTask);

        localStorage.setItem('taskList', JSON.stringify(storedData));

        numberIndex();
      }
    });
  });

  numberIndex();
};

// add event listerner to the imported checkItem to perform their functions
container.addEventListener('click', checkItem);

// add event listener to the input to create items added on the addItem function
inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    addItem();
  }
});
