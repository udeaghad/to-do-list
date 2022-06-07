// load list items from local storage

const loadFromStorage = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));
  if (dataStorage) {
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
          }
        });
      });
    }
  }
};

export { loadFromStorage as default };