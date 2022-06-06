class Task {
  constructor(descr, completed, index = 0) {
    this.descr = descr;
    this.completed = completed;
    this.index = index;
  }
}

const taskList = [];

let index = 1;

const inputAdd = document.querySelector('#to-do-input');

const numberIndex = () => {
  const addTask = new Task(inputAdd.value, false, index);

  taskList.push(addTask);
  index += 1;

  const dataStorage = JSON.parse(localStorage.getItem('taskList'));

  const newIndex = 0;
  for (let i = 0; i < dataStorage.length; i += 1) {
    dataStorage[i].index = newIndex + 1;
  }
};

const loadFromStorage = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));
  for (let i = 0; i < dataStorage.length; i += 1) {
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
    listInfo.innerHTML = `${dataStorage[i].descr}`;

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'icon');

    listContainer.appendChild(listItem);

    listItem.append(checkbox, listInfo, editIcon);

    editIcon.addEventListener('click', () => {
      const editInput = document.createElement('input');
      editInput.classList.add('edit-input');
      listItem.replaceChild(editInput, listInfo);
      editInput.value = listInfo.innerHTML;

      editInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          listItem.replaceChild(listInfo, editInput);
          listInfo.innerHTML = editInput.value;

          numberIndex();
        }
      });
    });

    numberIndex();
  }
};

export { loadFromStorage as default };