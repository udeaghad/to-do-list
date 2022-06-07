let taskList = [];
// To re-number the index after every action
const numberIndex = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));

  let newIndex = 1;
  for (let i = 0; i < dataStorage.length; i += 1) {
    dataStorage[i].index = newIndex;
    newIndex += 1;
  }
  localStorage.setItem('taskList', JSON.stringify(dataStorage));
};

// Create events when checkbox is clicked
const checkItem = () => {
  const listItem = document.querySelectorAll('.list-item');
  const list = document.querySelectorAll('.list');

  listItem.forEach(() => {
    const checkbox = document.querySelectorAll('.check-box');
    const listInfo = document.querySelectorAll('.list-info');
    const iconImg = document.querySelectorAll('.icon');
    const clearBtn = document.querySelector('#clear-btn');
    const storageData = JSON.parse(localStorage.getItem('taskList'));
    // Strike the item, show trash icon,and change the value of completed when checked
    for (let i = 0; i < checkbox.length; i += 1) {
      if (checkbox[i].checked) {
        listInfo[i].classList.add('line-through');
        iconImg[i].classList = 'fa-solid fa-trash icon';

        storageData[i].completed = true;
      } else if (checkbox[i].checked === false && listInfo[i]) {
        listInfo[i].classList = 'list-info';
        iconImg[i].classList = 'fa-solid fa-ellipsis-vertical icon';
        storageData[i].completed = false;
      }
      localStorage.setItem('taskList', JSON.stringify(storageData));
    }

    // Remove item from the list when the trash icon is clicked
    iconImg.forEach((i) => i.addEventListener('click', () => {
      for (let i = 0; i < checkbox.length; i += 1) {
        if (iconImg[i].classList.contains('fa-trash')) {
          list[i].remove();
          const storedData = JSON.parse(localStorage.getItem('taskList'));

          const newData = storedData.filter((arr) => arr.descr !== listInfo[i].innerHTML);
          taskList = taskList.filter((arr) => arr.descr !== listInfo[i].innerHTML);

          localStorage.setItem('taskList', JSON.stringify(newData));
          numberIndex();
        }
      }
    }));
    // Remove checked lists when clear button is clicked
    clearBtn.addEventListener('click', () => {
      for (let i = 0; i < checkbox.length; i += 1) {
        if (iconImg[i].classList.contains('fa-trash')) {
          list[i].remove();
          const storedData = JSON.parse(localStorage.getItem('taskList'));

          const newData = storedData.filter((arr) => arr.descr !== listInfo[i].innerHTML);
          taskList = taskList.filter((arr) => arr.descr !== listInfo[i].innerHTML);

          localStorage.setItem('taskList', JSON.stringify(newData));

          numberIndex();
        }
      }
    });
  });
};

export { checkItem as default };