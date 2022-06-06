// import _ from 'lodash';
import './style.css';
import loadFromStorage from './modules/loadstorage.js';

import checkItem from './modules/checkitem.js';

window.addEventListener('load', loadFromStorage);
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
const addItem = () => {
  const addTask = new Task(inputAdd.value, false, index);

  taskList.push(addTask);

  index += 1;

  localStorage.setItem('taskList', JSON.stringify(taskList));

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

  editIcon.addEventListener('click', () => {
    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    listItem.replaceChild(editInput, listInfo);
    editInput.value = listInfo.innerHTML;

    const storedData = JSON.parse(localStorage.getItem('taskList'));

    const newData = storedData.filter((arr) => arr.descr !== listInfo.innerHTML);

    taskList = taskList.filter((arr) => arr.descr !== listInfo.innerHTML);

    localStorage.setItem('taskList', JSON.stringify(newData));

    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        listItem.replaceChild(listInfo, editInput);
        listInfo.innerHTML = editInput.value;
        const storedData = JSON.parse(localStorage.getItem('taskList'));
        const editedTask = new Task(listInfo.innerHTML, false, index);
        storedData.push(editedTask);
        taskList.push(editedTask);

        localStorage.setItem('taskList', JSON.stringify(storedData));

        numberIndex();
      }
    });
  });

  numberIndex();
};

container.addEventListener('click', checkItem);

inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    addItem();
  }
});
